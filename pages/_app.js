import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import iconRB from '../assets/image/rbicon.png';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title> КУП Служба заказчика ЖКУ </title>
      <meta name="description" content="Сайт коммунального унитарного предприятия «Служба заказчика жилищно-коммунальных услуг Солигорского района» " />
      <meta name="keywords" content="ЖКХ,жкх,Солигорск, ЖКХ КОМПЛЕКС, жэс,услуги жкх,тарифы жкх,капитальный ремонт,текущий ремонт,Солигорский район,годовой план текщего ремонта,ремонт жилфонда" />
      <link rel="shortcut icon" href={iconRB.src} type="image/png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export function reportWebVitals(metric) {
  console.log(metric)
}