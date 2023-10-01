'use client'
import { register } from 'swiper/element/bundle'
register();

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { Swiper, SwiperSlide } from 'swiper/react'


export default function ItensPlanos() {

    
    const planos = [
        {
            id: '1',
            name: '',
            plano: 400,
            price: 79,
            description: 'Plano com vantagens de HBO'
        },
        {
            id: '2',
            name: '',
            plano: 500,
            price: 89,
            description: ''
        },

        {
            id: '3',
            name: '',
            plano: 700,
            price: 109,
            description: ''
        }
    ]
 

  return (

    <div className='w-full flex flex-col items-center justify-center lg:flex-row md:flex-row gap-4 p-4 scroll-mr-1'>
 

            {planos.map((item) => (
                 <div key={item.id} className="flex flex-col  hover:scale-105 transition-all lg:w-[380px] lg:h-[380px] justify-between w-full rounded-lg border-zinc-400  dark:bg-zinc-800 shadow active:shadow-lg hover:shadow-lg py-4 pb-4">
                 <div className="flex flex-col p-4 items-center justify-center ">
                   <h3 className="text-3xl font-bold dark:text-orange-500">{item.plano} mb</h3>
                   <hr className='text-black w-full mt-4'/>
                 </div>
                
                 <div className="flex w-full font-bold items-center dark:text-white text-slate-400 justify-center px-2  h-40">
                     <div>
                         <p>por</p>
                         <p>R$</p>
                     </div>
     
                     <div>
                         <p className="text-7xl">{item.price}</p>
                     </div>
     
                     <div>
                         <p>,90</p>
                         <p>/mês</p>
                     </div>
     
                 </div>
     
                 <div className="flex flex-col items-center dark:text-white h-20 justify-center">
                     <p>beneficios</p>
                     <h3>{item.description}</h3>
                 </div>
     
     
                 <div className="flex items-center justify-center p-4">
                     <button className="bg-blue-900 w-full px-4 py-2 rounded text-white">CONTRATAR</button>
                 </div>
             </div>
     
     
     
            ))}



    </div>
  
  )
}
