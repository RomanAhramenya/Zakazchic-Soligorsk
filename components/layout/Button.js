import Link from "next/link";
import { useRouter } from 'next/router';
export default function Button({href,name}) {
    const router = useRouter();
    return <button  className="  mt-1 border-gray bg-yellow   px-5 rounded-xl hover:underline font-bold delay-100 ease-in-out">
        <Link scroll={false} className={router.pathname == href ? "active" : ""}  href={href}>
        {name}
          </Link>
    </button>
}