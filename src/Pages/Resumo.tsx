import React from 'react'
import { useDataContext } from '../Context/DataContext'
import GraficoVendas from '../Components/GraficoVendas';

export default function Resumo() {
  const { data } = useDataContext();

  if(!data) return null;

  return (
    <section>
      <div className='resumo flex mb'>
        <div className='box'>
          <h2> Vendas </h2>
          <span> 
            {data.filter(x => x.status != "falha").reduce((acc, item) => acc + item.preco, 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>

        <div className='box'>
          <h2> Recebidos </h2>
          <span>{data.filter(x => x.status == "pago").reduce((acc, item) => acc + item.preco, 0).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</span>
        </div>

        <div className='box'>
          <h2> Processando </h2>
          <span>{data.filter(x => x.status == "processando").reduce((acc, item) => acc + item.preco, 0).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}</span>
        </div>
      </div>

      <div className="box mb">
        <GraficoVendas data={data}/>
      </div>

    </section>
  )
}
