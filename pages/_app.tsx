import "@/styles/globals.less";
import { defaultGlobalState } from "@/src/context/defaultGlobalState";
import reducer from "@/src/context/reducer";
import { UserContext } from "@/src/context/userContext";
import type { AppProps } from "next/app";
import { useEffect, useReducer } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, defaultGlobalState);


  const values: any = {
    state,
    dispatch,
  };

  return (
    <UserContext.Provider value={values}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
