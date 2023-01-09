import Layout from "../layout/Layout";
import { plan } from "./../../assets/planTable/plan.js";
export default function CapRemont() {
  function summ(name) {
    let sum = 0;
    plan[name].map((e) => {
      sum += e.P;
    });
    return sum;
  }
  return (
    <Layout>
      <div className="flex flex-col  items-center justify-center p-2">
        <h1 className="text-center text-2xl text-indigo-500 font-bold md:w-2/3">
          Перечень многоквартирных жилых домов Солигорского райиона, подлежащих
          капитальному ремонту в 2022 году
        </h1>
 
        <p className="text-center">
          <a className=" text-slate-500 hover:text-slate-800 delay-100 ease-in-out" href="/files/planDonload.xls" download rel="noreferrer">
            Скачать &quot;Годовой план текущего ремонта жилфонда на 2022 год&quot; в
            фомате MS Exel{" "}
          </a>
        </p>
      </div>
    </Layout>
  );
}
