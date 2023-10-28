import React from "react";
import NewsProvider from "./news/NewsProvider";
import SessionProvider from "./session/SessionProvider";

const ProvidersWrapper = ({ children }) => {
  return (
    <SessionProvider>
      <NewsProvider>{children}</NewsProvider>
    </SessionProvider>
  );
};

export default ProvidersWrapper;
