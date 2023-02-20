import styled from "styled-components";

const EventCss = styled.section`
  display: flex;
  /* align-items: center; */
  @media ${(props) => props.theme.mob} {
    position: relative;
  }
  .swiper {
    width: 100%;
    @media ${(props) => props.theme.mob} {
      position: absolute;
      top: 40px;
    }
  }
  .swiper-slide {
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 60%;
    object-fit: cover;
    @media ${(props) => props.theme.mob} {
      width: 70%;
    }
  }
  .swiper-button-prev {
    color: black;
  }
  .swiper-button-next {
    color: black;
  }
`;

export default EventCss;
