'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function Button({href,name}) {
    const router = usePathname();
    
    return <button  style={{'fontFamily':'SegoeUIBold,sans-serif'}}  className="  mt-1 text-sm   rounded-xl hover:underline   font-semibold delay-100 ">
        <Link scroll={false} className={`px-2  ml-2 leading-5  ${router == href ? "active " : ""}`}  href={href}>
        {name}
          </Link>
    </button>
}