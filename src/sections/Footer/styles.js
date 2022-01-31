import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr ;
  }


  .left-container {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    padding: 3.2rem 0;

    .contact-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      background: ${({ theme }) => theme.black};
      border-radius: 0 4.8rem 4.8rem 0;
      padding: 3.2rem;
      margin-right: 2.4rem;
      min-height: 24rem;

      @media (max-width: 468px) {
        margin-right: 3.2rem;
      }

      .arrow-icon {
        font-size: 4.8rem;
        color: #fff;
      }

      .text {
        font-size: 2.2rem;
        font-weight: 700;
        color: #fff;
        margin-right: 3.2rem;
        margin-left: 3.2rem;
        max-width: 230px;
      }

      .social-medias {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .icon {
          color: #fff;
          font-size: 4.2rem;
          cursor: pointer;
          transition: color .2s ease-in;

          &:hover {
            color: #ccc;
          }

          &:nth-child(1) {
            padding-bottom: 1.2rem;
            border-bottom: 1px solid #ccc;
          }

          &:nth-child(2) {
            padding-top: 1.2rem;
          }
        }
      }
    }

    .donation-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-left: 12.8rem;

      @media (max-width: 978px) {
        padding-left: 6.4rem;
      }

      @media (max-width: 768px) {
        padding-left: 3.2rem;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-bottom: 1.6rem;
        .hands-icon {
          font-size: 4.8rem;
          color: ${({ theme }) => theme.green[200]};
        }
      }

      .donation-text {
        font-size: 1.6rem;
        margin-top: 1.2rem;
      }


    }
  }

  .right-container {
    display: flex;
    gap: 2.4rem;
    margin-right: 12.8rem;
    background: ${({ theme }) => theme.green[100]};
    padding: 4.8rem;
    border-radius: 4.8rem 4.8rem 0 0;

    @media (max-width: 978px) {
      margin-right: 6.4rem;
    }

    @media (max-width: 768px) {
      margin: 3.2rem;
      margin-bottom: 0;
    }

    .infos-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      border: 2px solid #fff;
      border-radius: 3.2rem;
      padding: 4.8rem 2.4rem;

      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding-bottom: 2.4rem;
        margin-bottom: 2.2rem;
        border-bottom: 2px solid #fff;

        .uptitle {
          font-size: 1.6rem;
          color: #fff;
          font-weight: 500;
        }

        .title-name {
          font-size: 1.8rem;
          color: #fff;
          font-weight: 500;
          margin-top: 1.6rem;
          margin-bottom: 3.2rem;
        }

        .description {
          text-align: center;
          line-height: 1.75;
        }
      }

      .footer {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-size: 1.6rem;
        }

        .icon {
          font-size: 3.6rem;
          color: #fff;
          margin-top: .8rem;

          cursor: pointer;
          transition: color .2s ease-in;
          
          &:hover {
            color: #ccc;
          }
        }
      }
    }
  }
`;