import { memo } from 'react';
import styled from "@emotion/styled";

const LoadingDots = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font: 300 4em/150% Impact;
  text-align: center;

  &:after {
    content: ' .';
    animation: dots 1s steps(5, end) infinite;}

  @keyframes dots {
    0%, 20% {
      color: ${({ theme }) => theme.background.secondary};
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);}
    40% {
      color: ${({ theme }) => theme.colors.primary};
      text-shadow:
        .25em 0 0 rgba(0,0,0,0),
        .5em 0 0 rgba(0,0,0,0);}
    60% {
      text-shadow:
        .25em 0 0 ${({ theme }) => theme.colors.primary},
        .5em 0 0 rgba(0,0,0,0);}
    80%, 100% {
      text-shadow:
        .25em 0 0 ${({ theme }) => theme.colors.primary},
        .5em 0 0 ${({ theme }) => theme.colors.primary};
      }
    }
`;

export default memo(LoadingDots);