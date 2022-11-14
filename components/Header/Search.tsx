import { useState, useRef } from "react";
import Image from "next/image";

import { useClickOutside } from "../../hooks/useClickOutside";

import { SearchStyled } from "./styles";

import search from "../../assets/images/search.svg";

export const Search = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(ref, open, handleOpen);

  function handleOpen() {
    if (!open) {
      inputRef.current?.focus();
    }
    setOpen((prev) => !prev);
  }

  return (
    <SearchStyled ref={ref}>
      <div className={`${open ? "open" : "close"}`}>
        <input placeholder="Search..." type="search" ref={inputRef} />
      </div>
      <button onClick={() => handleOpen()}>
        <Image src={search} alt="search icon" />
      </button>
    </SearchStyled>
  );
};
