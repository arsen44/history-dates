import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    margin: 0;
    height: 100vh;
  }

  /* Swiper стили */
  .swiper {
    position: relative;
  }

  .swiper-slide {
    opacity: 0.4;
    width: clamp(166px, 60cqi, 300px);

    @media ${({ theme }) => theme.media.medium}  {
      opacity: 1;
      width: auto;
    }

    & p:first-child {
      font-family: "Bebas Neue", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.2px;
      text-align: left;

      @media ${({ theme }) => theme.media.medium}  {
        font-size: 25px;
      }
    }

    & p:last-child {
      font-family: "PT Sans";
      font-size: 14px;
      font-weight: 400;
      line-height: 20.3px;
      text-align: left;
      

      @media ${({ theme }) => theme.media.medium}  {
        font-size: 20px;
      }
    }

    &-active {
      opacity: 1;
    }
  }

  .swiper-pagination-bullet {
    width: clamp(6px, 2vw, 12px);
    height: clamp(6px, 2vw, 12px);
    background-color:  ${({ theme }) => theme.colors.gray}; 

    &-active {
        background-color:  ${({ theme }) => theme.colors.gray}; 
    }
  }

  .swiper-pagination {
    @media ${({ theme }) => theme.media.medium}  {
      display: none;
    }
  }

`;
