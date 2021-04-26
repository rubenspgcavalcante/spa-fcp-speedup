import React, { memo, useContext } from 'react';
import styled from '@emotion/styled';
import RoutesContext from '../contexts/RoutesContext';

const BodyContainer = styled.section`
  padding-top: ${({ theme }) => theme.sizes.header}px;
  display: flex;
  flex:  1 1 auto;
  flex-flow: column;
`
const BodyContent = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 16px 16px 32px 32px;
  height: 100%;
`;

const TitleBar = styled.div`
  padding-top: 12px;
  background-color: ${({ theme }) => theme.background.primary};
  height: 98px;
  border-bottom: 2px solid #eee;
`;

const Title = styled.h1`
  padding: 0;
  margin-top: 0;
  margin-left: 64px;
  font-size: 48px;
  font-weight: bolder;
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
`;

const Body = ({ children }) => {
  const { active } = useContext(RoutesContext);

  return (
    <BodyContainer>
      <TitleBar>
        <Title>{active?.title}</Title>
      </TitleBar>
      <BodyContent>
        {children}
      </BodyContent>
    </BodyContainer>
  )
};

export default memo(Body);