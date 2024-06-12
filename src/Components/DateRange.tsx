import React from 'react'
import DateInput from './DateInput'
import { useDataContext } from '../Context/DataContext';

export default function DateRange() {
  const { filtroData, setFiltroData } = useDataContext();

  return (
    <form className='box flex' onSubmit={(e) => e.preventDefault()}>
      <DateInput
        name='inicio'
        label='Data Início'
        type='date'
        value={filtroData.inicio}
        onChange={({ target }) => setFiltroData({
          ...filtroData,
          [target.name]: target.value
        })}
      />

      <DateInput
        name='fim'
        label='Data Fim'
        type='date'
        value={filtroData.fim}
        onChange={({ target }) => setFiltroData({
          ...filtroData,
          [target.name]: target.value
        })}
      />
    </form>
  )
}
