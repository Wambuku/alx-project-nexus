import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import MovieDetails from '@/components/MovieDetails';
import PageTransition from '@/components/PageTransition';
import { MovieDetails as MovieDetailsType } from '@/types/movie';
import { movieApi } from '@/utils/api';

interface MoviePageProps {
  movie: MovieDetailsType | null;
}

export default function MoviePage({ movie }: MoviePageProps) {
  if (!movie) {
    return (
      <Layout>
        <div>Movie not found</div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{movie.title} - ALX Movie Nexus</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <Layout>
        <PageTransition>
          <MovieDetails movie={movie} />
        </PageTransition>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const movieId = params?.id as string;
    const movie = await movieApi.getMovieDetails(movieId);
    
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    return {
      props: {
        movie: null,
      },
    };
  }
};