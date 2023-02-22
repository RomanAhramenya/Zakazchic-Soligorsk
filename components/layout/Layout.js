"use client";

import Head from "next/head";
import s from "./layout.module.css";
import nav from "../../assets/image/nav.webp";
import logo from "../../assets/image/image-002.webp";
import Button from "../layout/Button";
import Image from "next/image";
export default function Layout({ children, tittle }) {

  return (
    <>
      <div>
        <header className="relative ">
          <nav
            className={`flex flex-wrap justify-between items-end ${s.container}`}
          >
            <div className=" absolute    left-0 right-0 w-full opacity-60">
              <Image
                priority
                alt="sol"
                src={nav}
                className="w-full h-80 blur-sm"
              />
            </div>
         
  
                <div className=" mx-auto md:flex   my-10 brightness-200 drop-shadow-md  ">
                 
                 <div className={` rounded-full flex items-center justify-center px-4 py-2 ${s.background_logo}`}>
                  <Image
                    priority
                    className="  object-cover h-full w-40"
                    src={logo}
                    alt={"logo"}
                  />
                 </div> 
                  <h1
                    className=" px-2 text-blue-900 lg:text-4xl md:text-2xl tracking-wide "
                    style={{ fontFamily: "SegoeUiBlack,sans-serif",textShadow:"0 0 10px black"  }}
                  >
                    <div>СЛУЖБА ЗАКАЗЧИКА</div>
                    <div>ЖИЛИЩНО-КОММУНАЛЬНЫХ УСЛУГ</div>
                    <div >СОЛИГОРСКОГО РАЙОНА</div>
                  </h1>
                </div>
              
           
            <div className="border-b-2 z-10 mx-auto text-white ">
              <Button href="/" name="Главная" />
              <Button href="/page2" name="COVID-19" />
              <Button href="/page3" name="АКТУАЛЬНАЯ ИНФОРМАЦИЯ" />
              <Button href="/page8" name="О НАС" />
            </div>
          </nav>
        </header>

        <main className="py-4" style={{ background: "rgb(15 23 42)" }}>
          {children}
        </main>

        <footer className={`  pb-10 ${s.container} `}>
          <nav
            className={`p-4 flex  flex-wrap justify-between border-y-2 items-end  text-white` } 
          >
            <Button href="/page4" name="ТЕКУЩИЙ РЕМОНТ" />
            <Button href="/page5" name="КАПИТАЛЬНЫЙ РЕМОНТ" />
            <Button href="/page6" name="УПРАВЛЕНИЕ ОБЩИМ ИМУЩЕСТВОМ" />
            <Button href="/page7" name="ОБРАЩЕНИЯ" />
          </nav>
          <div className="flex  justify-around items-center text-slate-600">
            <div className="hidden md:block">+375174 24 37 71 – приемная</div>
            <div className="text-center">
              <div className="my-2">
                {" "}
                <a
                  className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                  href="/files/svidetelstvo.pdf"
                  download
                  rel="noreferrer"
                >
                  {" "}
                  Скачать &quot;Свидетельство о государственной регистрации
                  юридического лица&quot;
                </a>
              </div>
              <div className="my-2">
                {" "}
                <a
                  className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                  href="/files/attestat54.pdf"
                  download
                  rel="noreferrer"
                >
                  {" "}
                  Скачать &quot;Аттестат соответствия №0000054-ФЗ&quot;
                </a>
              </div>
              <div className="my-2">
                {" "}
                <a
                  className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                  href="/files/attestat2800.pdf"
                  download
                  rel="noreferrer"
                >
                  {" "}
                  Скачать &quot;Аттестат соответствия №0002800-ИН&quot;
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
