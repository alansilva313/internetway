

import React from 'react'
import {Facebook, Instagram, PhoneCall, Youtube} from 'lucide-react'

export default function Footer() {
  return (
    <div>
        <div className='w-full flex flex-col md:flex-row md:flex md:items-start  md:justify-between md:gap-28 p-4 gap-4 bg-slate-100'>

<div className='flex flex-col'>
   <h3 className='font-bold'>Sobre nós</h3>
   <nav>
       <ul className='flex flex-col gap-2'>
           <li><a href="">Sobre</a></li>
           <li><a href="">Nossas Lojas</a></li>
           <li><a href="">Regulatórios</a></li>
           <li><a href="">LGPD</a></li>
           
       </ul>
   </nav>

</div>


<div className='flex flex-col'>
   <h3 className='font-bold'>Planos</h3>
   <nav>
       <ul className='flex flex-col gap-2'>
           <li><a href="">Residenciais</a></li>
           <li><a href="">Empresariais</a></li>
         
           
       </ul>
   </nav>

</div>


<div className='flex flex-col'>
   <h3 className='font-bold'>Cliente</h3>
   <nav>
       <ul className='flex flex-col gap-2'>
           <li><a href="">Portal do Assinante</a></li>
           <li><a href="">Teste sua Velocidade</a></li>
           <li><a href="">Dicas</a></li>
         
           
       </ul>
   </nav>

</div>
<hr />


<div className='w-full flex gap-4 items-center justify-center'>
  <Facebook  className='text-2xl'/>
  <Instagram className='text-4xl' />
  <Youtube   className='text-4xl'/>
  <PhoneCall />
 


</div>
</div>
    </div>
  )
}
