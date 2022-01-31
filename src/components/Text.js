import styled from 'styled-components';

export const Text  = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ isBold }) => isBold ? 500 : 400};
  color: ${({ isBlack, theme }) => isBlack ? theme.black : '#fff'};
`;