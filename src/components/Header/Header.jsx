import Container from "../Container";
import Navigation from "../Navigation";

import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Navigation />
      </Container>
    </StyledHeader>
  );
};

export default Header;
