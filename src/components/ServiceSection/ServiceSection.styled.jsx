import styled from "styled-components";

import bag from "../../assets/icons/bag.svg";

export const Section = styled.section`
  background-color: #daecff;
`;

export const ServiceContainer = styled.div`
  width: 100%;
  padding: 120px;
  background-image: url(${bag});
  background-repeat: no-repeat;
  background-position: bottom 92px right 145px;
`;

export const Content = styled.div`
  width: 1240px;
  padding: 0 35px;
  margin: 0 auto;
`;

export const TitleBlock = styled.div`
  height: 105px;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 125%;
  text-align: center;
  color: #111111;
`;
