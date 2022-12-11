import Link from "next/link";
import { useRouter } from 'next/router';
export default function Button({href,name}) {
    const router = useRouter();
    return <button  className="  mt-1 text-slate-600   px-5 rounded-xl hover:underline hover:text-slate-800  font-bold delay-100 ">
        <Link scroll={false} className={router.pathname == href ? "active" : ""}  href={href}>
        {name}
          </Link>
    </button>
}