import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import { Movie } from "../../components/Movie";
import styled from "styled-components";
import { Title, Trailer } from "../../components/Trailers/styles";

import back from "../../assets/images/back.png";
import play from "../../assets/images/playbutton.png";

import type { IMovie } from "../../types";

const Container = styled.div`
  flex: 1;
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 110px;
  padding: 0 10px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0;
    top: 130px;
  }
`;

const SingleTrailer = styled(Trailer)`
  width: fit-content;
  padding: 0 10px;

  @media (min-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0;
  }
`;

const PlayButton = styled.button`
  position: absolute;
  cursor: pointer;
  background: transparent;
  border: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0.8;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }
`;

type Props = {
  movie: IMovie;
};

export default function MoviePage({ movie }: Props) {
  return (
    <Container>
      <Head>
        <title>{`${movie.name} | Paisaflix`}</title>
      </Head>
      <main>
        <BackLink href="/" title="Go back">
          <Image src={back} alt="back" />
        </BackLink>
        <Movie movie={movie} />
        <section>
          <Title>Trailer</Title>
          <SingleTrailer>
            <Image
              width={297}
              height={137}
              src={movie.trailerImage}
              alt="trailer"
            />
            <PlayButton>
              <Image src={play} alt="play" />
            </PlayButton>
          </SingleTrailer>
        </section>
      </main>
    </Container>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const moviesRes = await fetch(`${process.env.URL}/movies`);
  const { data }: { data: IMovie[] } = await moviesRes.json();

  const paths = data.map((movie) => ({
    params: { id: movie._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  try {
    const id = params?.id;

    const movieRes = await fetch(`${process.env.URL}/movies/${id}`);

    const { data: movie } = await movieRes.json();

    return {
      props: { movie },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
