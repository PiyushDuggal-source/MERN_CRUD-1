import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const Nav = () => {
  return (
    <div className="navbar align-items-center m-2">
      <Menu>
        <MenuButton as={Button} colorScheme="blue">
          Menu
        </MenuButton>
        <MenuList>
          <MenuGroup>
            <MenuItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="create" className="nav-link">
                Create User
              </Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Nav;
