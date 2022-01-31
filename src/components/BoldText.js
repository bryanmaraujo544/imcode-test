import styled from 'styled-components';

export const BoldText  = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 468px) {
    font-size: 1.1rem;
  }
`;