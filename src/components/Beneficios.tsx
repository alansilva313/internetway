'use client'

import React, {useRef} from 'react'
import { motion, useScroll } from "framer-motion"
export default function Beneficios() {
    const { scrollYProgress } = useScroll();
    const scrollRef = useRef(null)

    const difenci = [
        {
             id: 1
,            image: '',
             title: 'PREÇO FIXO',
            description: 'Chega de surpresas na fatura. Aqui na Way, todo o plano tem seu valor, mas nenhum preço terá alteração, tendo o melhor custo benefício do mercado de fibra óptica.'
            
         },

         {
            id: 2
,            image: '',
            title: 'WI-FI GRÁTIS',
           description: 'Chega de surpresas na fatura. Aqui na Way, todo o plano tem seu valor, mas nenhum preço terá alteração, tendo o melhor custo benefício do mercado de fibra óptica.'
           
        },

        {
          id: 3
,            image: '',
          title: 'SEM COMBO',
         description: 'Chega de surpresas na fatura. Aqui na Way, todo o plano tem seu valor, mas nenhum preço terá alteração, tendo o melhor custo benefício do mercado de fibra óptica.'
         
      },
      {
        id: 4
,            image: '',
        title: 'SUPORTE TÉCNICO',
       description: 'Chega de surpresas na fatura. Aqui na Way, todo o plano tem seu valor, mas nenhum preço terá alteração, tendo o melhor custo benefício do mercado de fibra óptica.'
       
    }
    ]
  return (
    <div className='w-full p-4 px-10 items-center justify-center mt-12 mb-40 gap-6'>
      <div className='p-4 text-center'>
        <h3 className='text-2xl dark:text-white'>Internet com <strong className='text-orange-500'>fibra óptica</strong>, Wi-Fi grátis e muito mais</h3>
      </div>

      <div className='p-4 grid  lg:grid-cols-2 grid-flow-dense gap-8' ref={scrollRef} style={{ overflow: "scrollYProgress" }}>
        {
            difenci.map((item) => (
                <motion.div className='bg-zinc-400 p-4 rounded border-1 border-white' key={item.id}  
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                
                viewport={{ root: scrollRef }}
                
               
               
                >
                    
                    <h3 className='font-bold text-white dark:text-white'>{item.title}</h3>
                    <p className='dark:text-white'>{item.description}</p>

                </motion.div>
            ))
        }

      </div>
    </div>
  )
}
