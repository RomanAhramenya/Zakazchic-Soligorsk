import s from '../homeRenovation/css.module.css'
export default function CapRemont() {

  return (
   
      <div className="flex flex-col  items-center justify-center p-2">
        <h1 style={{'color':'rgb(56 189 248)'}}  className="text-center text-2xl text-indigo-500 font-bold md:w-2/3">
          Объекты капитального ремонта г.Солигорска и Солигорского района 2023 года
        </h1>
 
        <p className="text-center my-4">
          <a className={`text-slate-500 ${s.button}`} href="/files/capremontSmi.xlsx" download rel="noreferrer">
            Скачать &quot;Объекты капитального ремонта для СМИ&quot; в
            фомате MS Exel{" "}
          </a>
        </p>
        <p className="text-center ">
          <a className={`text-slate-500 ${s.button}`} href="/files/prespectiveProgramma.pdf" download rel="noreferrer">
            Скачать &quot;Перспективная программа 2021-2025&quot; в
            фомате PDF{" "}
          </a>
        </p>
      </div>
    
  );
}
