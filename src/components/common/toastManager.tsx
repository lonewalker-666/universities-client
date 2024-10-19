import { useRef, useEffect, useState } from "react";
import { messageBg } from "@/src/lib/constants";
import { AlertIcon } from "./icons/alertIcon";
import { CloseIcon } from "./icons/closeIcon";
import { InfoIcon } from "./icons/infoIcon";
import { CheckCircleIcon } from "./icons/checkCircleIcon";

interface IconLiteral {
  [key: string]: JSX.Element
}


var idx = -1;
const uuidv4 = () => {
  return idx++;
};

function useEventListener(eventName: any, handler: any, props = []) {
  // Create a ref that stores handler
  const savedHandler = useRef<any>();
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      if (typeof window != undefined && window.addEventListener) {
        // Create event listener that calls handler function stored in ref
        const eventListener = (event: any) => {
          if (savedHandler.current) savedHandler.current(event);
        };
        // Add event listener
        window.addEventListener(eventName, eventListener);
        // Remove event listener on cleanup
        return () => {
          window.removeEventListener(eventName, eventListener);
        };
      }
    },
    [eventName] // Re-run if eventName changes
  );
}

export function message(params: any = null) {
  if (window != undefined) {
    window.dispatchEvent(
      new CustomEvent("addNotification", { detail: params })
    );
  }
}

export const ToastManager = () => {
  const [messages, setMessages] = useState<any>([]);
  const timeout = useRef<any>(null);

  useEventListener("addNotification", (e: any) => {
    if (!timeout.current)
      timeout.current = setInterval(() => {
        setMessages((prev: any) => {
          let messages = [...prev];
          for (var i = 0; i < messages.length; i++) {
            messages[i].time++;
            if (messages[i].time > 3) {
              messages.splice(i, 1);
              i--;
            }
          }
          if (messages.length === 0 && timeout.current) {
            clearInterval(timeout.current);
            timeout.current = null;
          }
          return messages;
        });
      }, 1000);
    setMessages((prev: any) => {
      return [...prev, { ...e.detail, id: uuidv4(), time: 0 }];
    });
  });
  const messageIcon : IconLiteral = {
    "success": <CheckCircleIcon className="w-6 h-6" />,
    "error": <AlertIcon className="w-6 h-6" />,
    "info":<InfoIcon className="w-6 h-6" />
}

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full pointer-events-none flex justify-center z-50">
      <div className="absolute top-24 flex flex-col gap-4 max-w-90p">
        {messages.map((x: any) => {
          return (
            <div
              key={x.id}
              className={`relative flex rounded-lg items-center gap-2 py-1 px-2 ${messageBg[x.type] || messageBg['error']}`}
            >
              {messageIcon[x.type] || null}
              <span className="text-sm">{x.text}</span>
              <CloseIcon
                className="w-6 h-6 cursor-pointer pointer-events-auto ml-auto"
                onClick={() =>
                  setMessages((prev: any) => {
                    return prev.filter((y: any) => y.id !== x.id);
                  })
                }
              />
              <div
                style={{
                  transform: `scalex(${(1 / 3) * (x.time >= 3 ? 3 : x.time)})`,
                }}
                className={`absolute -left-0 border rounded-lg -bottom-1 w-full h-1 transition-transform origin-left duration-1000 ease-linear bg-white border-white-600`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
