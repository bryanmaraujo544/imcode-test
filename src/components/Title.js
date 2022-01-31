import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3.6rem;
  line-height: 1.3;
  font-weight: 900;
  color: ${({ theme, isGreen }) => isGreen ? theme.green[200] : theme.black};
  
`;