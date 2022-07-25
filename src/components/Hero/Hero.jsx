import Container from "../Container";
import HeroButton from "../Buttons/HeroButton";

import { Section, HeroContent, MainTitle, Content } from "./Hero.styled";

const Hero = () => (
  <Container>
    <Section>
      <HeroContent>
        <MainTitle>
          Разработка
          <br />
          интернет-магазина
          <br />с нуля за неделю
        </MainTitle>
        <Content>
          Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета
          - от фирменного стиля до пользовательского интерфейса в сжатые сроки с
          командой Virtual Designers
        </Content>
        <HeroButton text="Заказать" />
      </HeroContent>
    </Section>
  </Container>
);

export default Hero;
