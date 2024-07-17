import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);


  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };
  return (
    <li
      className="menu-items"

      onClick={closeDropdown}
      >
      {items.submenu ? (
        <>
          <button
            className="button"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
