import Image from "next/image";
import Link from "next/link";

export default function Dashboard(){
  return(
    <div className="bg-green-600 flex flex-col p-10 h-screen">
        <h1 className="text-6xl text-center">Rota Privada</h1>
      <div className="flex-1 flex justify-center items-center" data-aos="fade-down" data-aos-delay="500" >
        <Image width={300} height={100} src="/logoPay.png" alt="" />
      </div>
      
      <div className="h-36 flex lg:flex-row flex-col items-center justify-center gap-3" data-aos="fade-up" data-aos-delay="900" >

      <Link href='/login' className="bg-white text-green-800 p-2 w-full flex items-center justify-center rounded-md font-bold text-2xl"> 
        <button>Acessar</button>
      </Link>
        <button className="border p-2 text-white w-full rounded-md font-bold text-2xl">Sair da conta</button>
      </div>
    </div>
  )
}