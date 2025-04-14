'use client'

import Image from "next/image";
import Link from "next/link";

export default function Login(){
 
  const handleLogin = () =>{
    alert('Servidor indisponível')
  }
  return(
    <div className="bg-green-600 flex flex-col p-10 h-screen max-w-[600px]">

      <div className="h-96 flex justify-center items-center" data-aos="fade-down" data-aos-delay="500" >
        <Image width={300} height={100} src="/logoPay.png" alt="" />
      </div>
      
      <div className="flex-1 flex lg:flex-col flex-col mb-20 items-center justify-center gap-3" data-aos="fade-up" data-aos-delay="900" >
        
        <div className="row flex lg:flex-row flex-col w-full gap-3 mb-3 lg:max-w[600px]">
            <input type="text" placeholder="email@gmail.com" className="p-3 rounded-md border w-full border-none ouline-none" />
            <input type="password" placeholder="####################" className="p-3 rounded-md border w-full lg:max-w[400px] border-none ouline-none" />
        </div>
        
        <div className="row flex lg:flex-row flex-col w-full gap-3 mb-3 lg:max-w[600px]">
        <button onClick={ handleLogin }
          className="bg-white text-green-800 p-2 w-full md:flex-1 rounded-md font-bold text-2xl">Acessar</button>
        
        <Link href='/'>
          <button className="border p-2 text-white w-full md:flex-1 rounded-md font-bold text-2xl">Sair da conta</button>
        </Link>
        </div>
      </div>
    </div>
  )
}