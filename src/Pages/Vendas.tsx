import React from 'react'
import { useDataContext } from '../Context/DataContext'
import VendaItem from '../Components/VendaItem';

export default function Vendas() {
  const { data } = useDataContext();

  if(!data) return null;

  return (
    <ul>
      {data.map(venda => (
        <li 
          key={venda.id}
        > 
          <VendaItem 
            venda={venda}
          /> 
      </li>))
      }
    </ul>
  )
}
