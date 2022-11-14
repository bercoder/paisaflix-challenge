import Image from "next/image";

import star from "../../assets/images/star.svg";
import emptystar from "../../assets/images/emptystar.svg";
import halfstar from "../../assets/images/halfstar.svg";

export const Star = ({ n }: { n: number }) => {
  if (n === 0) return <Image src={emptystar} alt="star" />;

  if (n === 0.5) return <Image src={halfstar} alt="star" />;

  if (n === 1) return <Image src={star} alt="star" />;

  return null;
};
