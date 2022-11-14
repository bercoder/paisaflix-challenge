import Image from "next/image";
import { useRef, useState } from "react";
import { Nav, NavItem, UserStyled } from "./styles";

import { useClickOutside } from "../../hooks/useClickOutside";

import avatar from "../../assets/images/avatar.png";

export const User = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useClickOutside(ref, open, () => setOpen((prev) => !prev));

  return (
    <UserStyled ref={ref} onClick={() => setOpen((prev) => !prev)}>
      <>
        <Image src={avatar} alt="user avatar" />
        <span>Soy Paisanx</span>

        <div className={`items ${open ? "open" : ""}`}>
          <span>Soy Paisanx</span>
          <NavItem href="#">Profile</NavItem>
          <NavItem href="#">Log out</NavItem>
        </div>
      </>
    </UserStyled>
  );
};
