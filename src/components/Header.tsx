'use client'
import Image from 'next/image'
import {useState} from 'react'
import {Menu, X, User} from 'lucide-react'

import logoimagem from '../../public/logoway.svg'
export default function Header() {

    const [menu, setMenu] = useState('hidden')
      
    const showMenu = () => {

        if(menu === 'hidden'){
            setMenu('flex')
          
        }else {
            setMenu('hidden')
        }

    }
   
  return (

    <div>
    <div className="w-screen h-20 z-50 top-0 fixed justify-between bg-white dark:bg-zinc-950 lg:justify-around flex items-center px-5">
        <div className='hidden lg:flex flex-col'>
            <a href="#">
            <Image src={logoimagem} width={140} height={140} alt="Descrição da imagem" />
            </a>
          
        </div>

        <div className='lg:hidden flex flex-col'>
            <a href="#">
            <Image src={logoimagem} width={80} height={80} alt="Descrição da imagem" />
            </a>
          
        </div>

       

        <div className="hidden lg:flex">
            <nav>
                <ul className="flex gap-6 items-center ">
                    <li className='hover:text-orange-500 cursor-pointer dark:text-white'>Para você</li>
                    <li className='hover:text-orange-500 cursor-pointer dark:text-white'>Para Empresa</li>
                    <li className='hover:text-orange-500 cursor-pointer dark:text-white'>Planos</li>
                    <li className='hover:text-orange-500 cursor-pointer dark:text-white'>App Way</li>
                    <li>
                        <button className='bg-orange-500 flex items px-8 py-2 hover:bg-orange-600 rounded text-white cursor-pointer'><User /> Portal</button>
                    </li>
                   
                </ul>
            </nav>
        </div>

        <div className='flex lg:hidden dark:text-white'>
            <button onClick={showMenu}>
                {menu === 'flex' ? <X /> : <Menu /> }
             
           
            </button>
           
        </div>
    </div>

    
    <div className={`${menu} w-screen  h-[calc(100vh-81px)] z-10 bg-zinc-200 dark:bg-zinc-600 dark:text-white fixed top-20 items-stretch`}>
    <div className="flex w-full flex-col">
            <nav >
                <ul className="flex flex-col w-full gap-6">
                    <div className='border-b border-gray-100 p-4 hover:bg-zinc-200 cursor-pointer active:bg-zinc-200'>
                    <li>Para você</li>
                    </div>

                    <div className='border-b border-gray-100 p-4 hover:bg-zinc-200 cursor-pointer active:bg-zinc-200'>
                    <li>Para Empresa</li>
                    </div>
                    
                   <div  className='border-b border-gray-100 p-4 hover:bg-zinc-200 cursor-pointer active:bg-zinc-200'>
                   <li>Portal</li>
                   </div>
                   <div  className='border-b border-gray-100 p-4 hover:bg-zinc-200 cursor-pointer active:bg-zinc-200'>
                   <li>Planos</li>
                   </div>
                   <div  className='border-b border-gray-100 p-4 hover:bg-zinc-200 cursor-pointer active:bg-zinc-200'>
                   <li>App Way</li>
                   </div>
                   
                   
                </ul>
            </nav>
        </div>
    </div>


    </div>
  )
}
