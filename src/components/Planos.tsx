import ItensPlanos from "./ItensPlanos";

export default function Planos() {
  return (

    <div className="flex flex-col">

<div className="w-full flex items-center text-center justify-center">
            <h3 className="text-lg">Confira nossos planos, melhor qualidade para você!</h3>
        </div>
        
    <div className="flex flex-col items-center justify-center lg:flex-row lg:p-4  gap-8 ">

       
  
       <ItensPlanos />

        

    

        
    </div>

    
    <div className="p-4 flex items-center justify-center">
            <h3>Ver mais planos</h3>
        </div>


        
    </div>
  )
}
