import Head from "next/head";
import { GetStaticProps } from "next";
import styled from "styled-components";
import { Movie } from "../components/Movie";
import { Trailers } from "../components/Trailers";
import { Featured } from "../components/Featured";

import type { IMovie, ITrailer } from "../types";

const Container = styled.div`
  flex: 1;
`;

type Props = {
  movies: IMovie[];
  hero: IMovie;
  trailers: ITrailer[];
};

export default function Home({ movies, hero, trailers }: Props) {
  return (
    <Container>
      <Head>
        <title>Paisaflix</title>
        <meta name="description" content="Paisaflix is a challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Movie movie={hero} />
        <Trailers trailers={trailers} />
        <Featured movies={movies} />
      </main>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const moviesRes = await fetch(`${process.env.URL}/movies`);
    const heroRes = await fetch(`${process.env.URL}/hero`);
    const trailersRes = await fetch(`${process.env.URL}/trailers`);

    const { data: movies } = await moviesRes.json();
    const { data: hero } = await heroRes.json();
    const { data: trailers } = await trailersRes.json();
    return {
      props: {
        movies,
        hero,
        trailers,
      },
    };
  } catch (e) {
    // console.log(e);
    return {
      notFound: true,
    };
  }
};
