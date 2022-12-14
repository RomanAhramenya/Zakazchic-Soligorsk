import Layout from "../layout/Layout";

export default function Management() {
  return (
    <Layout>
    <div className="flex flex-col  items-center justify-center">
    <div className="w-3/4">
         <h1 className="text-center text-2xl text-slate-600 font-bold">Уважаемые жители Солигорска и Солигорского района</h1>
      <p className="py-4">
        С 01.06.2021 года плательщики жилищно-коммунальных услуг ежемесячно
        будут вносить плату за «услугу по управлению общим имуществом
        совместного домовладения».
      </p>
      <p className="text-center text-lg text-rose-600 font-bold">
        ВАЖНО! Данная услуга будет выделена из отдельных ЖКУ и не повлечет
        увеличение общего размера платы за коммунальные услуги.
      </p>
      <p className="py-4">
        Участники совместных домовладений по жилым домам сами определяют лицо,
        которое будет управлять общим имуществом совместного домовладения и
        получать за это плату. Для домов, где более 10 квартир, это может быть
        товарищество собственников (или ЖСПК). Если это вариант не выбран, то
        исполком уполномочит управление общим имуществом КУП «Служба заказчика ЖКУ».
      </p>
      <p className="py-4">
        Участники совместного домовладения — это, по сути, все собственники и
        наниматели, проживающие в многоквартирных домах. А к общему имуществу
        относятся помещения, конструктивные элементы и оборудование,
        расположенные за пределами квартиры — в подъезде, подвале, на чердаке,
        дворовой территории. Все это хозяйство требует управления — организации
        мероприятий по техническому обслуживанию, текущему и капитальному
        ремонтам, по предоставлению основных и дополнительных коммунальных
        услуг, а также по реализации прав жильцов на владение и пользование
        общим имуществом.
      </p>
      <p className="py-4">
        Таким образом, кроме оплаты новой услуги у потребителей ЖКУ появятся
        дополнительные, закрепленные договорными обязательствами, механизмы
        защиты своих прав и интересов. Размер платы за услугу будет зависеть от
        площади занимаемой квартиры по аналогии с платой за техобслуживание.
        «Услуга по управлению общим имуществом совместного домовладения» будет
        предоставляться на основании Типового договора на управление общим
        имуществом совместного домовладения и включаться отдельной строкой в
        извещение на оплату ЖКУ.
      </p>
      <p className="py-4">
        Для заключения типового договора участники совместных домовладений могут
        самостоятельно обращаться в КУП «Служба заказчика ЖКУ» по адресу г.Солигорск, ул.Константина Заслонова, д.2, ком 125А, тел. +375174 24-37-71.
      </p>
      <p className="text-center text-2xl text-slate-600 font-bold py-4 ">Перечень документов, предоставляемых для заключения договора:</p>
      <ul className="list-inside">
        <li className="list-disc italic text-lg">паспорт или иной документ, удостоверяющий личность;</li>
        <li className="list-disc italic text-lg">
          правоустанавливающие документы на жилое помещение (регистрационное
          удостоверение, технический паспорт);
        </li>
        <li className="list-disc italic text-lg">
          доверенность, если от имени собственника жилого помещения, члена ЖСК
          действует доверенное лицо.
        </li>
      </ul>
      <h1 className="text-center text-2xl text-slate-600 font-bold py-4 ">Приложение (ссылки для скачивания):</h1>
      <p className="py-2"><a href="/files/p1.pdf" rel="noreferrer" className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out" target='_blank' >Общая информация об услуге по управлению общим имуществом</a></p>
      <p className="py-2"><a href="/files/p2.pdf" rel="noreferrer" className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out" target='_blank' >Форма типового договора</a></p>
      <p className="py-2">  <a href="https://pravo.by/document/?guid=3871&p0=C21400571" rel="noreferrer" target='_blank' className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out">
        Положение о порядке расчетов и внесения платы за ЖКУ и платы за
        пользование жилыми помещениями государственного жилищного фонда, а также
        возмещения расходов на электроэнергию, утвержденное постановлением
        Совета Министров Республики Беларусь от 12.06.2014 № 571, с изменениями,
        принятыми в апреле текущего года
      </a></p>
      
      
    
    </div>
       
    </div>
      
    </Layout>
  );
}
