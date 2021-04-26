import React, { memo } from "react";
import styled from '@emotion/styled';
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const FlexContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const Template = ({ children }) => {
  return (
    <FlexContainer>
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </FlexContainer>
  );
};

export default memo(Template);