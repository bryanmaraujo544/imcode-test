import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.6rem;
  margin-top: 2.4rem;

  .list-container {
    display: flex;
    gap: 2.4rem;

  }
  
  `;

export const ListItem = styled.li`

  font-weight: 900;
  font-size: 1.2rem;
  padding: 0 .4rem .8rem .4rem;

  ${({ isActive }) => isActive && css`
  
    border-bottom: 2px solid ${({ theme }) => theme.green};
  `};
`;