'use client'
import React, { useState } from 'react';

export default function DuvidasFrequentes() {
  const duvidas = [
    {
      id: 1,
      title: 'O que é internet via fibra óptica e quais suas vantagens?',
      description: '',
    },
    {
      id: 2,
      title: 'O que é internet via fibra óptica e quais suas vantagens?',
      description:
        'Estamos sempre em busca de soluções integradas que se adaptem às necessidades de cada um. A empresa tem saído à frente do mercado, justamente por ser inovadora, transparente e acessível. Contratando a Internet Way, você desfrutará de uma conexão de qualidade. Prova disso são as nossas premiações, pois fomos eleitos a melhor internet de Marília e região por dois anos consecutivos. Além disso, nossos planos possuem selo de qualidade, as maiores taxas de upload do mercado, são sem franquia de consumo e contam com preço fixo. Aqui você terá atendimento personalizado e suporte técnico com atendentes qualificados e instruídos pelo nosso competente time de TI. Temos mais de 12 lojas espalhadas em nossa área de cobertura, nosso call center e backbone próprios e técnicos em cada localidade. Cliente Way ainda conta com aplicativo ULTRA moderno e prático para retirar boletos e 2° vias de fatura, realizar o auto desbloqueio da conexão, acompanhar notícias do mundo da tecnologia, e ainda tem acesso ao status da conexão. Conectamos você ao mundo!',
    },
    {
      id: 3,
      title: 'O que é internet via fibra óptica e quais suas vantagens?',
      description: '',
    },
    {
      id: 4,
      title: 'O que é internet via fibra óptica e quais suas vantagens?',
      description: '',
    },
    {
      id: 5,
      title: 'O que é internet via fibra óptica e quais suas vantagens?',
      description: '',
    },
    {
      id: 6,
      title: 'O que é internet via fibra óptica e quais suas vantagens?',
      description: '',
    },
    {
      id: 7,
      title: 'O que é internet via fibra óptica e quais suas vantagens?',
      description: '',
    },
  ];

  const Item = ({ item }: any)  => {
    const [show, setShow] = useState('h-0');
    const [padding, setPadding] = useState('');

    const mostrarDescricao = () => {
      if (show === 'h-0') {
        setShow('h-full');
        setPadding('p-4');
      } else {
        setShow('h-0');
        setPadding('');
      }
    };

    return (
      <div key={item.id} className='p-10 rounded'>
        <div className='bg-slate-200 p-2 w-full' onClick={mostrarDescricao}>
          <h3 className='font-bold'>{item.title}</h3>
        </div>

        <div
          className={`${show} ${padding} scroll-auto transition-all bg-zinc-100 rounded overflow-hidden`}
        >
          <p>{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='w-full lg:px-40'>
      <h3 className='text-center text-2xl'>Dúvidas frequentes</h3>
      <div className='w-full p-10 grid'>
        {duvidas.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
