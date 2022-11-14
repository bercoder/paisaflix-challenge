import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { formatViews, inMinutes } from "../../utils";

import { IMovie } from "../../types";

import eye from "../../assets/images/eye.png";
import clock from "../../assets/images/clock.png";

import {
  Container,
  Title,
  ListOfMovies,
  Movie,
  Cover,
  Genre,
  Detail,
} from "./styles";

type Props = {
  movies: IMovie[];
};

export const Featured: FC<Props> = ({ movies }) => {
  return (
    <Container>
      <Title>
        <h2>Featured</h2>
        <Link href="#">View More</Link>
      </Title>
      <ListOfMovies>
        {movies?.map((movie) => (
          <Movie key={movie._id}>
            <Link href={`movies/${movie._id}`}>
              <Cover>
                <Genre>{movie.genre}</Genre>
                <Image fill src={movie.coverImage} alt={movie.name} />
              </Cover>
              <Detail>
                <div>
                  <span>
                    <Image src={clock} alt="clock" />
                    {inMinutes(movie.duration)}
                  </span>
                  <span>
                    <Image src={eye} alt="views" />
                    {formatViews(movie.views)} views
                  </span>
                </div>
                <h3>{movie.name}</h3>
              </Detail>
            </Link>
          </Movie>
        ))}
      </ListOfMovies>
    </Container>
  );
};
