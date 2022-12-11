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
        <table className="w-2/3 border-2 my-4 border-neutral-800">
          <thead>
            <tr className="sticky top-0   border-2 border-neutral-800 bg-slate-400">
              <th className="border-2 py-4 border-neutral-800">№</th>
              <th className="border-2 py-4 border-neutral-800">
                Адрес объекта
              </th>
              <th className="border-2 py-4 border-neutral-800">
                Год постройки
              </th>
              <th className="border-2 py-4 border-neutral-800">Этажей</th>
              <th className="border-2 py-4 border-neutral-800">Площадь, м2</th>
            </tr>
          </thead>
          <tbody>
            {plan.table2021.map((e) => {
              return (
                <tr key={e.id}>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.id}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.street}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.year}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.h}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.P}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th className="py-4">ИТОГО:</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{summ("table2021")}</th>
            </tr>
          </tfoot>
        </table>
        <p className="text-justify text-xl text-slate-600 font-bold md:w-2/3 m-4">
          Сроки и объёмы проведения капитального ремонта жилых домов, указанных
          в текущем графике, могут быть уточнены с учётом продолжительности
          изготовления проектно-сметной документации, прохождения
          государственной экспертизы документацией, проведения процедуры по
          выбору генподрядной организации на выполнение строительно-монтажных
          работ, а также финансирования из бюджета и отчисления граждан на
          капитальный ремонт.
        </p>
        <p className="text-center text-2xl text-indigo-500 font-bold md:w-2/3 ">
          {" "}
          Перспективная программа капитального ремонта жилищного фонда Лидского
          района на 2021-2025 годы
        </p>
        <table className="w-2/3 border-2 my-4 border-neutral-800">
          <thead>
            <tr className="sticky top-0   border-2 border-neutral-800 bg-slate-400">
              <th className="border-2 py-4 border-neutral-800">№</th>
              <th className="border-2 py-4 border-neutral-800">
                Адрес объекта
              </th>
              <th className="border-2 py-4 border-neutral-800">
                Год постройки
              </th>
              <th className="border-2 py-4 border-neutral-800">Этажей</th>
              <th className="border-2 py-4 border-neutral-800">Площадь, м2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="px-4 italic text-slate-600  font-bold">
                Капитальный ремонт жилых домов на 2021 год
              </td>
            </tr>
            {plan.table2022.map((e) => {
              return (
                <tr key={e.id}>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.id}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.street}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.year}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.h}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.P}
                  </td>
                </tr>
              );
            })}
            <tr className="border-2 border-neutral-800">
              <th className="py-4">ИТОГО:</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{summ("table2021")}</th>
            </tr>

            <tr>
              <td colSpan="5" className="px-4 italic text-slate-600  font-bold">
                Капитальный ремонт жилых домов на 2022 год
              </td>
            </tr>
            {plan.table2023.map((e) => {
              return (
                <tr key={e.id}>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.id}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.street}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.year}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.h}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.P}
                  </td>
                </tr>
              );
            })}
            <tr className="border-2 border-neutral-800">
              <th className="py-4">ИТОГО:</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{summ("table2022")}</th>
            </tr>
            <tr>
              <td colSpan="5" className="px-4 italic text-slate-600  font-bold">
                Капитальный ремонт жилых домов на 2023 год
              </td>
            </tr>
            {plan.table2023.map((e) => {
              return (
                <tr key={e.id}>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.id}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.street}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.year}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.h}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.P}
                  </td>
                </tr>
              );
            })}
            <tr className="border-2 border-neutral-800">
              <th className="py-4">ИТОГО:</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{summ("table2023")}</th>
            </tr>
            <tr>
              <td colSpan="5" className="px-4 italic text-slate-600  font-bold">
                Капитальный ремонт жилых домов на 2024 год
              </td>
            </tr>
            {plan.table2024.map((e) => {
              return (
                <tr key={e.id}>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.id}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.street}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.year}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.h}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.P}
                  </td>
                </tr>
              );
            })}
            <tr className="border-2 border-neutral-800">
              <th className="py-4">ИТОГО:</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{summ("table2024")}</th>
            </tr>
            <tr>
              <td colSpan="5" className="px-4 italic text-slate-600  font-bold">
                Капитальный ремонт жилых домов на 2025 год
              </td>
            </tr>
            {plan.table2025.map((e) => {
              return (
                <tr key={e.id}>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.id}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.street}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.year}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.h}
                  </td>
                  <td className="border-2 border-neutral-800 text-center">
                    {e.P}
                  </td>
                </tr>
              );
            })}
            <tr className="border-2 border-neutral-800">
              <th className="py-4">ИТОГО:</th>
              <th></th>
              <th></th>
              <th></th>
              <th>{summ("table2025")}</th>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
        <p className="text-justify text-xl text-slate-600 font-bold md:w-2/3 m-4">
          Сроки проведения капитального ремонта, указанные в перспективной
          программе капитального ремонта на 2021-2025 годы, могут уточняться с
          учетом ежегодных осмотров и обследования зданий, технического
          состояния зданий, выполнения графика текущего ремонта, а так же
          финансирования из бюджета и отчисления граждан на капитальный ремонт.
        </p>
      </div>
    </Layout>
  );
}
