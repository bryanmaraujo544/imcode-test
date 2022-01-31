import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 3.6rem;
  line-height: 1.3;
  font-weight: 900;
  color: ${({ theme }) => theme.black};

  @media (max-width: 768px) {
    font-size: 3.2rem;
  }

  @media (max-width: 468px) {
    font-size: 2.8rem;
  }
`;