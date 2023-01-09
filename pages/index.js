import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import Post from "../components/main/Post";
import img1 from "../assets/image/post1.jpg";
import img2 from "../assets/image/post2.jpg";
import img3 from "../assets/image/post3.jpg";

export default function Home() {
  return (
    <Layout>
      <div>
        <Post
          h1="Важно!"
          text="С 1 июня 2022 г. планируется ПОЛНОЕ ВОЗМЕЩЕНИЕ НАСЕЛЕНИЕМ РАСХОДОВ за электроэнергию, потребляемую на освещение вспомогательных помещений и работу оборудования (за исключением лифтов), в многоквартирных жилых домах исходя из показаний прибора учета расхода электроэнергии соразмерно общей площади принадлежащих и (или) занимаемых жилых и (или) нежилых помещений.
В настоящее время возмещение осуществляется не выше предельно допустимого тарифа на возмещение таких расходов в размере 0,022 рубля на 1 кв.м (в соответствии с Указом Президента Республики Беларусь от 23 декабря 2021 г. № 507)."
          img={img1}
        />
        <Post
          h1="О предприятии"
          text='Коммунальное унитарное предприятие «Служба заказчика жилищно-
коммунальных услуг Солигорского района», создано в
соответствии с решением Минского областного исполнительного комитета
от 3 мая 2018 года №363, является правопреемником коммунального
дочернего унитарного предприятия «Управление капитального строительства
Солигорского района» филиал «Служба заказчика жилищно-коммунальных
услуг» и Коммунального дочернего унитарного предприятия «Служба
заказчика жилищно-коммунальных услуг Солигорского района».'
          img={img2}
        />
     
      </div>
    </Layout>
  );
}
