import Link from "next/link";
import Layout from "../components/layout/Layout";

export default  function Error(){
    return(
        <Layout>
            <h1 className="text-center text-2xl  font-bold">Страница не найдена <Link className=" text-xl text-teal-600 " href='/'>вернуться на главную</Link> </h1>
        </Layout>
    )
}