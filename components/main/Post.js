import Image from 'next/image'
export default function Post({h1,text,img}){
    return(
        <div className="max-w-md mx-auto bg-white  rounded-xl shadow-md overflow-hidden md:max-w-6xl my-10">
  <div className="md:flex ">
    <div className="md:shrink-0 ">
    <Image 
      src={img}
      alt="Picture"
      className="h-48 w-full object-cover md:h-full md:w-48"
    />
   
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{h1}</div>
      <p className="mt-2 text-slate-500 " >{text}</p>
    </div>
  </div>
</div>
    )
}