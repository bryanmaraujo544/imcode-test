import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .title {
    max-width: 420px;
  }

  .carrousel-container {
    margin-top: 6.4rem;
    width: 100%;
    background: ${({ theme }) =>  theme.green[100]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
    padding: 6.4rem 12.8rem;
    height: 40rem;

    @media (max-width: 978px) {
      height: 30rem;
    }

    @media (max-width: 768px) {
      padding: 3.2rem;
      height: 25rem;
    }

    
    @media (max-width: 500px) {
      height: 20rem;
    }

    
    .images-container {
      flex: 1;
      position: relative;
      height: 100%;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(3, 50rem);
      justify-content: center;

      @media (max-width: 1180px) {
        grid-template-columns: repeat(3, 40rem);
      }

      @media (max-width: 978px) {
        grid-template-columns: repeat(3, 30rem);
      }

      @media (max-width: 600px) {
        grid-template-columns: repeat(3, 25rem);
      }

      @media (max-width: 500px) {
        grid-template-columns: repeat(3, 15rem);
      }

      .slide {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 3.2rem;
        opacity: .5;
        transform: scale(0.8);
        object-fit: cover;
        box-shadow: 0 3px 9px #00000030;
        overflow-x: hidden;
        background: black;
      }
  
      #center-slide {
        opacity: 1;
        z-index: 99;
      }
    }

    .arrow-icon {
      font-size: 4.8rem;
      color: #fff;
      cursor: pointer;
    }
  }

`