import Image from "next/image";
import Layout from "../layout/Layout";
import covid1 from '../../assets/image/covid1.png'
import covid2 from '../../assets/image/covid2.png'
import covid3 from '../../assets/image/covid3.png'
export default function Covid(){
    return (
        <Layout>
        <div className="flex flex-col  justify-center items-center  ">
                 <div className="w-3/4 my-6 shadow-2xl">
            <Image 
      src={covid1}
      alt="Picture"
      className="h-auto w-full "
    />
            </div>
            <div className="w-3/4 text-right my-6 shadow-2xl">
            <Image 
      src={covid2}
      alt="Picture"
      className="h-auto w-full "
    />
            </div>
            <div className="w-3/4 text-right my-6 shadow-2xl">
            <Image 
      src={covid3}
      alt="Picture"
      className="h-auto w-full "
    />
            </div>
        </div>
           
        
        
        </Layout>
    )
}