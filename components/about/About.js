
import Image from 'next/image';
import imageGerb from './../../assets/image/gerb.png'
export default function About() {

  return (
  
      <div className=" p-2 text-white">
        <div className="p-4">
        <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center'>
            <Image src={imageGerb} alt={'gerb'} className='h-3/4 w-1/3'/>
          </div>
          <h1 className="text-center text-2xl  font-bold pb-4 ">
            Уважаемый посетитель сайта!
          </h1>
        </div>
          
          <p>
            Обратиться в коммунальное унитарное предприятие «Служба заказчика
            жилищно-коммунальных услуг Солигорского района». можно следующими
            способами:
          </p>
          <ul className="list-disc list-inside">
            <li>позвонить специалистам предприятия;</li>
            <li>
              направить письменное обращение по адресу: 223710, Минская область,
г.Солигорск, ул.Константина Заслонова, д.2, ком 125А.
            </li>
            <li>с помощью интернет-ресурса <a  className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out" href="https://xn--80abnmycp7evc.xn--90ais/" target={"_blank"} rel="noreferrer">обращения.бел</a></li>
          </ul>
          <h3 className=" text-xl font-bold my-4">Наши телефоны:</h3>
          <ul className="list-disc list-inside">
            <li>+375174 24 37 71 – приемная;</li>
            <li>+375174 25 96 76 – инспектор по заявлениям;</li>
            <li>+375174 24 37 72 – бухгалтерия, ведущий экономист;</li>
            <li>
            +375174 24 37 74 – юрисконсульт, специалист по кадрам, специалист по
              управлению общим имуществом
            </li>
            <li>+375174 25 98 42 – специалист по закупкам</li>
            <li>
            +375174 25 98 26 – специалист по капитальному ремонту, инженер по
              техническому надзору, инженер по сметной работе;
            </li>
            <li>
            +375174 32 67 56 – специалист по техническому обслуживанию и текущему
              ремонту, инженер
            </li>
            <li>
            +375174 24 37 75 – специалист по благоустройству, инженер по техническому
              надзору.
            </li>
          </ul>
        </div>
        <div className="p-4 ">
          <h1 className=" text-xl font-bold my-4 ">Об обращениях граждан и юридических лиц</h1>
          <p className="text-rose-700  text-xl text-justify italic">Уважаемые посетители! Обращаем внимание на то, что 2 января 2023 г. вступают в силу изменения, внесенные в статью 25 Закона Республики Беларусь &quot;Об обращениях граждан и юридических лиц&quot;.
          В связи с этим подача электронных обращений будет возможна только с помощью государственной единой (интегрированной) республиканской информационной системы учета и обработки обращений 
          граждан и юридических лиц - интернет-ресурса <a className=" text-white hover:text-slate-800 delay-100 ease-in-out" href="https://xn--80abnmycp7evc.xn--90ais/" target={"_blank"} rel="noreferrer">обращения.бел</a></p>
        </div>
      </div>
   
  );
}
