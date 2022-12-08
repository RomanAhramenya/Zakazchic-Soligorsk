import Head from "next/head";
import Image from "next/image";
import iconRB from "../../assets/image/rbicon.png";
import logo from '../../assets/image/logo.png'
import Button from "./Button";
export default function Layout({ children, tittle }) {
  return (
    <>
      <Head>
        <title>ЖКХ Солигорск </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="ЖКХ" />
        <link rel="shortcut icon" href={iconRB.src} type="image/png" />
      </Head>
      <div className="">
        <header className="m-10" >
        <div className="md:flex justify-center items-center">
        <div className="md:shrink-0 "><Image  width='100' height={100} className="h-48 w-full object-cover md:h-full md:w-48" src={logo.src} alt={'logo'} /></div>
             
        <h1 className="text-center text-4xl">
            Солигорский государственный заказчик в сфере жилищно-коммунального
          хозяйства
        </h1> 
        </div>
       
       

        <nav className="flex flex-wrap justify-center border-y-2 my-10 ">
        <Button href='/' name='Главная'/>
        <Button href='/page2' name='COVID-19'/>
        <Button href='/page3' name='АКТУАЛЬНАЯ ИНФОРМАЦИЯ'/>
        <Button href='/page4' name='РЕМОНТ ЖИЛФОНДА'/>
        <Button href='/page5' name='КАПИТАЛЬНЫЙ РЕМОНТ'/>
        <Button href='/page6' name='УПРАВЛЕНИЕ ОБЩИМ ИМУЩЕСТВОМ'/>
        <Button href='/page7' name='ОБРАЩЕНИЯ'/>
        </nav>
        </header>
        
        <main className="">{children}</main>
       
      </div>
    </>
  );
}
