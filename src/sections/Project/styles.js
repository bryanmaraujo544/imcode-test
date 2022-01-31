import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .main-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 6.4rem;

    @media (max-width: 678px) {
      grid-template-columns: 1fr;
      margin-top: 1.6rem;
    }
  }

  .left-container {
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
    padding: 6.4rem;
    padding-left: 12.8rem;

    @media (max-width: 768px) {
      padding: 3.2rem;
    }

    .title {
      font-size: 2rem;
      text-align: center;
    }

    .text-container {
      border-left: .3rem solid ${({ theme }) => theme.green[100]};
      padding-left: 1.2rem;
      
      p {
        font-weight: 500;
        font-size: 1.4rem;

        & + p {
          margin-top: 2rem;
        }
      }
    }

    img {
      width: 100%;
      max-width: 350px;
    }
  }

  .right-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2.4rem;
    width: 100%;
    margin-left: 3.2rem;
    padding: 6.4rem;
    padding-right: 12.8rem;
    background: ${({ theme }) => theme.black};
    border-radius: 4.8rem 0 0 4.8rem;

    @media (max-width: 768px) {
      padding: 3.2rem;
    }

    @media (max-width: 678px) {
      margin-top: 3.2rem;
    }

    .title {
      font-weight: 700;
      font-size: 2rem;
      margin-bottom: 1.6rem;
      max-width: 350px;
    }

    .text {
      a {
        color: ${({ theme }) => theme.green[100]};
      }
    }

    .social-medias {
      display: flex;
      gap: 1.6rem;

      .icon {
        font-size: 3.2rem;
        color: #fff;
        cursor: pointer;
        display: flex;
      }
    }

  }
`;