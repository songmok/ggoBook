import styled from "styled-components";

const EventCss = styled.section`
  display: flex;
  align-items: center;
  .swiper {
    width: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 80%;
    height: 80%;
    object-fit: cover;
  }
  .swiper-button-prev {
    color: black;
  }
  .swiper-button-next {
    color: black;
  }
`;

export default EventCss;
