import { FC } from "react";
import Image from "next/image";

import { rating, inMinutes } from "../../utils";

import { Star } from "./Star";
import {
  Container,
  Content,
  Poster,
  Title,
  Stars,
  Text,
  Button,
} from "./styles";

import { IMovie } from "../../types";

type Props = {
  movie: IMovie;
};

export const Movie: FC<Props> = ({ movie }) => {
  const duration = inMinutes(movie.duration);

  return (
    <Container>
      <Content>
        <Title>{movie.name}</Title>
        <Stars>
          {rating(movie.rating).map((el, index) => (
            <Star key={index} n={el} />
          ))}
        </Stars>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
        <Text>
          Genre: {movie.genre}
          <br />
          Duration: {duration}
          <br />
          Rating: {movie.rating}
          <br />
        </Text>
        <Button>Watch now</Button>
      </Content>
      <Poster>
        <Image src={movie.coverImage} fill alt={movie.name} />
      </Poster>
    </Container>
  );
};
