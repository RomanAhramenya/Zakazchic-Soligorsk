import Head from "next/head";
import Image from "next/image";
import iconRB from "../../assets/image/rbicon.png";
import logo from "../../assets/image/logo.png";
import Button from "./Button";
export default function Layout({ children, tittle }) {
  return (
    <>
      <Head>
        <title> КУП Служба заказчика ЖКУ </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="ЖКХ" />
        <link rel="shortcut icon" href={iconRB.src} type="image/png" />
      </Head>
      <div className=" bg-lime-100">
        <header className="p-10 ">
          <div className="md:flex justify-center items-center">
            <div className="md:shrink-0 ">
              <Image
                width="100"
                height={100}
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={logo.src}
                alt={"logo"}
              />
            </div>

            <h1 className="text-center text-4xl text-slate-600 font-bold ">
              КУП Служба заказчика ЖКУ
            </h1>
          </div>

          <nav className="flex flex-wrap justify-center border-y-2 my-10 ">
            <Button href="/" name="Главная" />
            <Button href="/page2" name="COVID-19" />
            <Button href="/page3" name="АКТУАЛЬНАЯ ИНФОРМАЦИЯ" />
            <Button href="/page4" name="РЕМОНТ ЖИЛФОНДА" />
            <Button href="/page5" name="КАПИТАЛЬНЫЙ РЕМОНТ" />
            <Button href="/page6" name="УПРАВЛЕНИЕ ОБЩИМ ИМУЩЕСТВОМ" />
            <Button href="/page7" name="ОБРАЩЕНИЯ" />
            <Button href="/page8" name="О нас" />
          </nav>
        </header>

        <main className="">{children}</main>
        <footer className="flex  justify-around items-center border-y-2 mt-10 py-10  text-slate-600">
          <div>24 37 71 – приемная</div>
          <div>
            <div>
              {" "}
              <a
                className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                href="/files/svidetelstvo.pdf"
                download
                rel="noreferrer"
              > Скачать "Свидетельство о государственной регистрации юридического
              лица"</a>
             
            </div>
            <div>
              {" "}
              <a
                className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                href="/files/attestat54.pdf"
                download
                rel="noreferrer"
              > Скачать "Аттестат соответствия №0000054-ФЗ"</a>
             
            </div>
            <div>
              {" "}
              <a
                className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                href="/files/attestat2800.pdf"
                download
                rel="noreferrer"
              > Скачать "Аттестат соответствия №0002800-ИН"</a>
             
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
