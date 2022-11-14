import Image from "next/image";

import { ChangeEvent, useRef } from "react";
import { JoinContainer, Message } from "./styles";

import arrow from "../../assets/images/arrow.svg";

interface Form extends HTMLFormElement {
  email: HTMLInputElement;
}

export const JoinNewsletter = () => {
  function handleSubmit(e: ChangeEvent<Form>) {
    e.preventDefault();
    if (msgRef.current) {
      msgRef.current.textContent = "thanks for subscribing";
    }
    setTimeout(() => {
      if (msgRef.current) msgRef.current.textContent = "";
    }, 4000);
    e.target.reset();
  }

  const msgRef = useRef<HTMLParagraphElement>(null);

  return (
    <JoinContainer>
      <h3>Join Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Insert your mail here"
          type="email"
          name="email"
          required
        />
        <button>
          <Image src={arrow} alt="arrow" />
        </button>
      </form>
      <Message ref={msgRef}></Message>
    </JoinContainer>
  );
};
