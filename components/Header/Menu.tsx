import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Nav, NavItem } from "./styles";

import { useClickOutside } from "../../hooks/useClickOutside";

export const Menu = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, open, () => setOpen((prev) => !prev));

  return (
    <Nav ref={ref}>
      <input
        id="menu"
        type="checkbox"
        checked={open}
        onChange={() => setOpen((prev) => !prev)}
      />
      <label htmlFor="menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="items">
        <NavItem className={pathname === "/" ? "active" : ""} href="/">
          Home
        </NavItem>
        <NavItem className={pathname === "contact" ? "active" : ""} href="#">
          Contact Us
        </NavItem>
        <NavItem className={pathname === "faq" ? "active" : ""} href="#">
          FAQ
        </NavItem>
        <NavItem className={pathname === "pricing" ? "active" : ""} href="#">
          Pricing
        </NavItem>
      </div>
    </Nav>
  );
};
