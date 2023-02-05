'use client'

import Head from "next/head";
import s from './layout.module.css'
import nav from "../../assets/image/nav.webp";
import logo from "../../assets/image/image-002.webp";
import Button from "../layout/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

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
             <nav className={`flex flex-wrap justify-between items-end ${s.container}` }>
             <div className="  overflow-hidden object-cover md:h-1/3 md:w-1/2 md:rounded-br-full" >
              <Image  priority alt='sol' src={nav} />
             </div>
             <div  className="m-4 flex flex-col">
             
              
              <div className="border-b-2 ">
                <Button href="/" name="Главная" />
                    <Button href="/page2" name="COVID-19" />
          <Button href="/page3" name="АКТУАЛЬНАЯ ИНФОРМАЦИЯ" />
          <Button href="/page8" name="О НАС" />
              </div>
      
             </div>
          
        </nav>
        <div className="text-center md:flex justify-center items-center bg-slate-300  "  >
          <div className=" mx-10 shrink-0 brightness-200 drop-shadow-md  ">
            <Image 
                priority
              className="  object-cover md:h-full md:w-80"
              src={logo}
              alt={"logo"}
            />
          </div>

          <h1 className=" px-2 text-2xl  md:text-4xl tracking-wide " style={{'fontFamily':'SegoeUiBlack,sans-serif',}}>
          <div>СЛУЖБА ЗАКАЗЧИКА</div> 
          <div>ЖИЛИЩНО-КОММУНАЛЬНЫХ УСЛУГ</div>
          <div>СОЛИГОРСКОГО РАЙОНА</div>
          </h1>
        </div>
      </header>

        <main className="py-4" style={{'background':'rgb(15 23 42)'}} >
   
        {children}
     
        </main>
    
        <footer className={`  pb-10 ${s.container} `}>
        <nav className={`p-4 flex flex-wrap justify-between border-y-2 items-end ${s.container}`}>
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
