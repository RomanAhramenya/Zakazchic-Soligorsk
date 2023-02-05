import logo from "../../assets/image/image-002.webp";
import Button from "../layout/Button";
import Image from "next/image";
export default function Header () {
    return (
        <header className="p-4  ">
             <nav className="flex flex-wrap justify-center  my-10 ">
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
            <nav className="flex flex-wrap justify-center  my-10 ">
            <Button href="/page4" name="РЕМОНТ ЖИЛФОНДА" />
          <Button href="/page5" name="КАПИТАЛЬНЫЙ РЕМОНТ" />
          <Button href="/page6" name="УПРАВЛЕНИЕ ОБЩИМ ИМУЩЕСТВОМ" />
          <Button href="/page7" name="ОБРАЩЕНИЯ" />
            </nav>
   
      </header>
    )
}