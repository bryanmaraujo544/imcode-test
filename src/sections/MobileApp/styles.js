import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  padding: 0 12.8rem;
  gap: 3.2rem;

  @media (max-width: 768px) {
      padding: 0 4.8rem;
    
  }

  .mobile-img-container {
    flex: 1;
    img {
      width: 100%;
      margin-top: -12.8rem;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .app-infos-container {
    flex: 1.5;

    .subtitle {
      max-width: 75%;
      margin-top: 4.2rem;
    }

    .qualities-container {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      margin-top: 4.2rem;

      .quality {
        display: flex;
        gap: .8rem;

        .icon {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.green[200]};
        }

        .quality-text {
          font-size: 1.4rem;
          font-weight: 700;
        }
      }
    }

    .last-text {
      display: flex;
      align-items: center;
      margin-top: 4.2rem;
      .icon {
        margin: 0 .3rem;
      }
    }
  }

`;