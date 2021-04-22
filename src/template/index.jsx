import React, { memo } from "react";
import Body from "./Body";
import Header from "./Header";

const Template = ({ children }) => {
  return (<>
    <Header />
    <Body>
      {children}
    </Body>
  </>);
};

export default memo(Template);