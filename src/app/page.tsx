
import Head from 'next/head';
import Votacion from './components/Votacion';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Votación de Animales</title>
        <meta name="description" content="Vota por tu animal favorito: Perro o Gato" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Vota por tu Animal Favorito</h1>
        <Votacion />
      </main>
    </div>
  );
};

export default HomePage;
