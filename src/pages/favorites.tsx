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