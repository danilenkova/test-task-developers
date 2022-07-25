import OrderButton from "../Buttons/OrderButton";

import { Menu, SiteNav, MenuItem, MenuLink } from "./NavMenu.styled";

const NavMenu = ({ menu }) => (
  <SiteNav>
    {menu && (
      <Menu>
        {menu.map((item) => (
          <MenuItem key={item.id}>
            <MenuLink href={`#${item.id}`}>{item.title}</MenuLink>
          </MenuItem>
        ))}
      </Menu>
    )}
    <OrderButton text="Заказать" />
  </SiteNav>
);

export default NavMenu;
