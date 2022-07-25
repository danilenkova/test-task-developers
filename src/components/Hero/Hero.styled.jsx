import styled from "styled-components";

import hero1 from "../../assets/icons/hero/hero1.svg";
import hero2 from "../../assets/icons/hero/hero2.svg";
import hero3 from "../../assets/icons/hero/hero3.svg";
import hero4 from "../../assets/icons/hero/hero4.svg";
import hero5 from "../../assets/icons/hero/hero5.svg";
import cart from "../../assets/icons/hero/cart.png";

export const Section = styled.section`
  max-width: 100%;
  height: 766px;
  padding-top: 170px;
  background-image: url(${hero2}), url(${hero1}), url(${hero3}), url(${cart}),
    url(${hero4}), url(${hero5});
  background-repeat: no-repeat;
  background-position: bottom 95px left 63px, bottom 41px left 0,
    top 120px left 239px, top 111px right 171px, top 82px right 0,
    top 92px right 575px;
`;

export const HeroContent = styled.div`
  width: 1240px;
  padding: 0 35px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 125%;
  color: #484848;
`;

export const Content = styled.p`
  width: 432px;
  margin-bottom: 60px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #000000;
`;
