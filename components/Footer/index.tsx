import Link from "next/link";
import Image from "next/image";
import { JoinNewsletter } from "./JoinNewsletter";
import { Container, Logo, GroupOfLinks, ContactInfo } from "./styles";

import pin from "../../assets/images/pin.svg";
import mail from "../../assets/images/mail.svg";
import phone from "../../assets/images/phone.svg";

export const Footer = () => {
  return (
    <Container>
      <section>
        <div className="title">
          <Logo>Paisaflix</Logo>
          <JoinNewsletter />
        </div>
        <GroupOfLinks>
          <div>
            <h3>Product</h3>
            <Link href="#">Movies</Link>
            <Link href="#">TV Show</Link>
            <Link href="#">Videos</Link>
          </div>
          <div>
            <h3>Media Group</h3>
            <Link href="#">Nice Studio</Link>
            <Link href="#">Nice News</Link>
            <Link href="#">Nice TV</Link>
          </div>
          <div>
            <h3>Sitemap</h3>
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Press</Link>
          </div>
        </GroupOfLinks>
      </section>
      <ContactInfo>
        <div>
          <Image src={pin} alt="pin icon" />
          <p>8819 Enrique Martínez, Bs. As., 90280</p>
        </div>
        <div>
          <Image src={mail} alt="mail icon" />
          <p>hola@paisanos.io</p>
        </div>
        <div>
          <Image src={phone} alt="phone icon" />
          <p>+271 386-647-3637</p>
        </div>
      </ContactInfo>
    </Container>
  );
};
