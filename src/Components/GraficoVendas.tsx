import React from 'react'
import { IVenda } from '../Context/DataContext'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface IVendaDia {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: IVenda[]): IVendaDia[]{
  const dias = data.reduce((acc: { [key: string]: IVendaDia }, item) => {
    const dia = item.data.split(" ")[0];

    if(!acc[dia])
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0
      }
    acc[dia][item.status] += item.preco;
      
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({ ...dia, data: dia.data.substring(5)}));
}

function GraficoVendas({ data }: { data: IVenda[] }) {
  const _transformData = transformData(data);

  return (
    <>
      <ResponsiveContainer width={"99%"} height={400}>
        <LineChart width={400} height={300} data={_transformData}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip/>
          <Legend/>
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3}/>
          <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3}/>
          <Line type="monotone" dataKey="falha" stroke="#000000" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default GraficoVendas