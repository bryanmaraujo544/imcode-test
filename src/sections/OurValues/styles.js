import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 12.8rem;
  width: 100%;
  gap: 3.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3.2rem;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .title {
      margin-bottom: 1.6rem;
    }
  }

  .right-container {
    padding-left: 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      padding-left: 0rem;
      margin-top: 3.2rem;
    }

    .circle {
      width: 20rem;
      height: 20rem;
      border: 2px solid ${({ theme }) => theme.black};
      border-radius: 50%;
    }

    .logo {
      font-weight: 900;
      font-size: 4.2rem;
      margin-top: 3.2rem;

      .ada-wendy {
        font-weight: 400;
        margin-left: .4rem;
        span {
          color: ${({ theme }) => theme.green[100]};
        }
      }
    }
  }

`;