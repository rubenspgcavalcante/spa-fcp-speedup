import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 6px;
  box-shadow: 2px 2px 4px #ccc;
  padding: 32px;
`;