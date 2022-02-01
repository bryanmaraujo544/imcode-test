import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3.2rem;
`;

export const MainSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 12.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1.25fr 1fr;
  }

  @media (max-width: 668px) {
    grid-template-columns: 1fr;
  }

  .left-container {
    padding: 9.6rem;
    padding-left: 12.8rem;
    background: ${({ theme }) => theme.green[100]};
    border-radius: 0rem 4.8rem 4.8rem 0;
    margin-right: 3.2rem;

    @media (max-width: 768px) {
      padding: 4.8rem;
    }

    .title {
      max-width: 75%;

      @media (max-width: 768px) {
        max-width: 100%;
      }
    }

    .subtitle {
      margin-top: 1.6rem;
    }
  }

  .right-container {
    padding: 1.6rem;
    padding-right: 12.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 4.8rem;
    }

    img {
      width: 90%;
      object-fit: container;

      @media (max-width: 768px) {
        width: 65%;
      }
    }
  }
`;