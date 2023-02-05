
import s from './css.module.css'
export default function HomeRenovation() {
  return (
   
      <div className="flex flex-col  items-center justify-center p-2">
        {" "}
        <h1 style={{'color':'rgb(56 189 248)'}} className="text-center text-2xl text-indigo-500 font-bold">Годовой план текущего ремонта жилфонда на 2023 год</h1>
        <p className="text-center my-4">
          <a className={`text-slate-500 ${s.button}`} href="/files/plan.pdf" target="_blank" download rel="noreferrer">
            Скачать &quot;Годовой план текущего ремонта жилфонда на 2023 год&quot; в
            фомате PDF
          </a>
        </p>
        <p className="text-center">
          <a className={`text-slate-500 ${s.button}`} href="/files/planDonload.xlsx" download rel="noreferrer">
            Скачать &quot;Годовой план текущего ремонта (подъезды) на 2023 год&quot; в
            фомате MS Exel{" "}
          </a>
        </p>
      </div>
   
  );
}
