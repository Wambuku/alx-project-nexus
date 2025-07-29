import Head from 'next/head';
import Layout from '@/components/Layout';
import FavoritesList from '@/components/FavoritesList';
import PageTransition from '@/components/PageTransition';

export default function FavoritesPage() {
  return (
    <>
      <Head>
        <title>My Favorites - ALX Movie Nexus</title>
        <meta name="description" content="Your saved favorite movies" />
      </Head>
      <Layout>
        <PageTransition>
          <FavoritesList />
        </PageTransition>
      </Layout>
    </>
  );
}

// This ensures the page is statically generated and doesn't try to access localStorage during build
export async function getStaticProps() {
  return {
    props: {},
  };
}