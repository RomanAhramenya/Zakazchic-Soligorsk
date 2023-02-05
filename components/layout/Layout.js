'use client'

import Head from "next/head";
import s from './layout.module.css'
import nav from "../../assets/image/nav.webp";
import logo from "../../assets/image/image-002.webp";
import Button from "../layout/Button";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import LoadingScreen from "../loadingScreen/LoadingScreen";
export default function Layout({ children, tittle }) {
  const [render,setRender] = useState(1)
  useEffect(()=>{
    setRender(render+1)
  },[])
  console.log('layout=',render)
  return (
    <>
    
      <div>
      
      <header className=" ">
             <nav className={`flex flex-wrap justify-center ${s.container}`}>
             <Image priority src={nav} className="h-80  object-cover md:h-1/3 md:w-1/3"/>
          <Button href="/" name="Главная" />
          <Button href="/page2" name="COVID-19" />
          <Button href="/page3" name="АКТУАЛЬНАЯ ИНФОРМАЦИЯ" />
          <Button href="/page8" name="О НАС" />
        </nav>
        <div className="md:flex justify-center items-center">
          <div className="mx-10 md:shrink-0 ">
            <Image 
                priority
              width="300"
              height='300'
              className="h-80  object-cover md:h-full md:w-80"
              src={logo}
              alt={"logo"}
            />
          </div>

          <h1 className=" px-2 text-2xl  md:text-4xl" style={{'fontFamily':'SegoeUiBlack,sans-serif',}}>
          <div>СЛУЖБА ЗАКАЗЧИКА</div> 
          <div>ЖИЛИЩНО-КОММУНАЛЬНЫХ УСЛУГ</div>
          <div>СОЛИГОРСКОГО РАЙОНА</div>
          </h1>
        </div>
      </header>

        <main >
      <Suspense fallback={<LoadingScreen/>}>
        {children}
      </Suspense>
        </main>
    
        <footer className=" border-y-2 mt-10 py-10  ">
        <nav className="flex flex-wrap justify-center  my-10 ">
            <Button href="/page4" name="РЕМОНТ ЖИЛФОНДА" />
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
              > Скачать &quot;Свидетельство о государственной регистрации юридического
              лица&quot;</a>
             
            </div>
            <div className="my-2" >
              {" "}
              <a
                className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                href="/files/attestat54.pdf"
                download
                rel="noreferrer"
              > Скачать &quot;Аттестат соответствия №0000054-ФЗ&quot;</a>
             
            </div>
            <div className="my-2">
              {" "}
              <a
                className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out"
                href="/files/attestat2800.pdf"
                download
                rel="noreferrer"
              > Скачать &quot;Аттестат соответствия №0002800-ИН&quot;</a>
             
            </div>
          </div>
            </div>
       
        </footer>
      </div>
    </>
  );
}
