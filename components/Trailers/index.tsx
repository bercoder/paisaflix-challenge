import Image from "next/image";
import { FC } from "react";

import { ITrailer } from "../../types";
import { Container, Title, ListOfTrailers, Trailer, Number } from "./styles";

type Props = {
  trailers: ITrailer[];
};

export const Trailers: FC<Props> = ({ trailers }) => {
  return (
    <Container>
      <Title>Trailers</Title>
      <ListOfTrailers>
        {trailers?.map((trailer, index) => (
          <Trailer key={trailer._id}>
            <Image
              width={297}
              height={137}
              src={trailer.trailerImage}
              alt="trailer"
            />
            <Number>{String(index + 1).padStart(2, "0")}</Number>
          </Trailer>
        ))}
      </ListOfTrailers>
    </Container>
  );
};
