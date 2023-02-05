import Link  from "next/link";

export default function Error(){
    return (
        <div>
            <h1 className="text-center text-2xl text-red-800">Страница не найдена <Link href='/' className="text-lg text-gray-700">на главную</Link></h1>
            
        </div>
    )
}