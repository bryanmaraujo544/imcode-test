import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MainSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3.2rem;
  gap: 1.6rem;

  .left-container {
    padding: 6.4rem;
    background: ${({ theme }) => theme.green};
    border-radius: 0rem 3.2rem 3.2rem 0;

    .subtitle {
      margin-top: 1.6rem;
    }
  }

  .right-container {
  }
`;