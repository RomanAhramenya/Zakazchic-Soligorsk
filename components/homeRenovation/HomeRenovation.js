import Layout from "../layout/Layout";

export default function HomeRenovation() {
  return (
    <Layout>
      <div className="flex flex-col  items-center justify-center p-2">
        {" "}
        <h1 className="text-center text-2xl text-indigo-500 font-bold">Годовой план текущего ремонта жилфонда на 2022 год</h1>
        <p className="text-center">
          <a className=" text-slate-500 hover:text-slate-800 delay-50" href="/files/plan.pdf" target="_blank" rel="noreferrer">
            Просмотр &quot;Годовой план текущего ремонта жилфонда на 2022 год&quot; в
            фомате PDF
          </a>
        </p>
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
