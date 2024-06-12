import React, { useEffect, useState } from 'react'
import DateRange from './DateRange'
import Meses from './Meses'
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [title, setTitle] = useState("Resumo");
  const { pathname } = useLocation();

  useEffect(()=>{
    if(pathname && pathname === "/") setTitle("Resumo");
    if(pathname && pathname === "/vendas") setTitle("Vendas");
    if(pathname && pathname === "/venda") setTitle("Venda");
  },[pathname])
  return (
    <header className='mb'>
      <div className='daterange mb'>
        <DateRange/>
        <h1 className='box bg-3'>{title}</h1>
      </div>
      <Meses/>
    </header>
  )
}
