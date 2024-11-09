import React from "react";
import { ArrowForwardIcon } from "../common/icons";
interface props {
  title?: any;
  items: any;
  icon: any;
  showTitle: boolean;
  showCount?: boolean;
}

const ListContainer = ({
  title,
  items,
  icon: IconComponent,
  showTitle = false,
  showCount = false,
}: props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1000px] flex flex-col gap-4 p-8">
        <div className="flex flex-row items-center gap-2">
          {showTitle && (
            <h1 className="text-[#000000CC] font-bold text-[24px]">{title}</h1>
          )}
          {showCount && (
            <p className="text-[#000000CC] font-bold text-[18px]">
              ({items.length})
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-between max-w-4xl bg-[#F5F5F5] text-black p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-md"
                />
                <p className="font-medium">{item.name}</p>
              </div>
              {IconComponent && <IconComponent color="black" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
