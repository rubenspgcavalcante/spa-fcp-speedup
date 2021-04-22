import React, { useContext, memo } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import RoutesContext from '../contexts/RoutesContext';

const StickHeader = styled.header`
  position: fixed;
  width: 100%;
  height: auto;
`;

const HeaderBar = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 32px;
  padding: 20px 12px; 
  flex-direction: row-reverse;
  position: sticky;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  padding-right: 12px;
`

const PageLink = styled(NavLink)`
  margin: 8px 8px;
  color: #ccc;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  font-size: 18px;

  &.selected {
    text-decoration: underline;
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

const Header = () => {
  const { routes } = useContext(RoutesContext);

  return (
    <StickHeader>
      <HeaderBar>
        <LinksContainer>
          {routes?.map(({ title, path, exact }) => (
            <PageLink activeClassName="selected" key={title} to={path} exact={exact}>{title}</PageLink>
          ))}
        </LinksContainer>
      </HeaderBar>
    </StickHeader>
  )
};

export default memo(Header);