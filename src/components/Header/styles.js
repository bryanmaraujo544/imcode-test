import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2.8rem;
  position: fixed;
  background: #fff;
  z-index: 99999;

  .list-container {
    display: flex;
    gap: 2.4rem;

  }
  
  `;

export const ListItem = styled.li`
  a {

    font-weight: 900;
    font-size: 1.8rem;
    padding: 0 .4rem .8rem .4rem;
  
    &.isActive{
      border-bottom: 2px solid ${({ theme }) => theme.green[100]};
    };

  }
`;