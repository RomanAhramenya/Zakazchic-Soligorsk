import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import iconRB from '../assets/image/rbicon.png';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title> КУП Служба заказчика ЖКУ </title>
      <meta name="description" content="ЖКХ" />
      <link rel="shortcut icon" href={iconRB.src} type="image/png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
