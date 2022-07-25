import menu from "../../assets/data/menu.json";

import Logo from "../Logo";
import NavMenu from "../NavMenu";

import { Nav } from "./Navigation.styled";

const Navigation = () => (
  <Nav>
    <Logo />
    <NavMenu menu={menu} />
  </Nav>
);

export default Navigation;
