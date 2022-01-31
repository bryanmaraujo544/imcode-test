import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .left-container {
    background: ${({ theme }) => theme.black};
    border-radius: 0 4.8rem 4.8rem 0;
    padding: 6.4rem;
    padding: 12.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 3.2rem;

    @media (max-width: 768px) {
      padding: 3.2rem;
    }

    .title {
      color: #fff;
      font-size: 4.2rem;
      line-height: 1.3;
    }

    .subtitle {
      font-size: 2rem;
      color: #fff;
      margin-top: 3.2rem;
      font-weight: 700;
    }
  }

  .right-container {
    padding: 6.4rem;
    padding-right: 12.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    @media (max-width: 768px) {
      padding: 3.2rem;
    }

    .functionality {
      .title {
        font-size: 2.2rem;
        font-weight: 900;
        color: ${({ theme }) => theme.black};
        span {
          font-size: 2.4rem;
          margin-right: 1.6rem;
        }
      }

      .text {
        font-size: 1.4rem;
        font-weight: 500;

        color: #343A40;
        margin-top: 1.2rem;
      }
    }
  }
`;