'use client'

import Image from "next/image";
import Link from "next/link";

export default function Login(){
 
  const handleLogin = () =>{
    alert('Servidor indisponível')
  }
  return(
    <div className="bg-green-600 flex flex-col p-10 h-screen">

      <div className="h-96 flex justify-center items-center" data-aos="fade-down" data-aos-delay="500" >
        <Image width={300} height={100} src="/picpay-blanc.png" alt="" />
      </div>
      
      <div className="flex-1 flex lg:flex-col flex-col mb-20 items-center justify-center gap-3" data-aos="fade-up" data-aos-delay="900" >
        
        <div className="row flex lg:flex-row flex-col w-full gap-3 mb-3 lg:w-[800px]">
            <input type="text" placeholder="email@gmail.com" className="p-3 rounded-md border w-full" />
            <input type="password" placeholder="####################" className="p-3 rounded-md border w-full" />
        </div>
        
        <button onClick={ handleLogin }
          className="bg-white text-green-800 p-2 w-full lg:w-96 rounded-md font-bold text-2xl">Acessar</button>
        
        <Link href='/'>
          <button className="border p-2 text-white w-full lg:w-96 rounded-md font-bold text-2xl">Sair da conta</button>
        </Link>
      </div>
    </div>
  )
}