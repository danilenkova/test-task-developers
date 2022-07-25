import Logotype from "../../assets/icons/logo.svg";

import { LogoLink } from "./Logo.styled";

const Logo = () => (
  <LogoLink href="/">
    <img src={Logotype} alt="logo" />
  </LogoLink>
);

export default Logo;
