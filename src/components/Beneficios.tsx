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
           
        }
    ]
  return (
    <div className='w-full p-4 mt-12 mb-40 gap-6'>
      <div className='p-4'>
        <h3 className='text-2xl font-bold dark:text-white'>Nossos <strong className='text-orange-500'>diferenciais</strong> para sua casa</h3>
      </div>

      <div className='p-4 flex flex-col gap-8' ref={scrollRef} style={{ overflow: "hidden" }}>
        {
            difenci.map((item) => (
                <motion.div key={item.id}  
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
                
               
               
                >
                    
                    <h3 className='font-bold dark:text-white'>{item.title}</h3>
                    <p className='dark:text-white'>{item.description}</p>

                </motion.div>
            ))
        }

      </div>
    </div>
  )
}
