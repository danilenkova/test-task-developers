import services from "../../assets/data/services.json";

import Container from "../Container";
import ServiceList from "../ServiceList";

import {
  Section,
  ServiceContainer,
  Content,
  TitleBlock,
  Title,
} from "./ServiceSection.styled";

const ServiceSection = () => (
  <Section id="service">
    <Container>
      <ServiceContainer>
        <Content>
          <TitleBlock>
            <Title>
              Что входит в услугу по созданию дизайна интернет-магазина?
            </Title>
          </TitleBlock>
          <ServiceList data={services} />
        </Content>
      </ServiceContainer>
    </Container>
  </Section>
);

export default ServiceSection;
