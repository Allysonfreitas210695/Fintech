import React from 'react'
import { useDataContext } from '../Context/DataContext';


const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize"
}

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat('pt-BR', { month: "long" }).format(date);
}

export default function MesBtn({ n }: { n: number }) {
  const { filtroData, setFiltroData } = useDataContext();


  function formatDate(date: Date){
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = String(date.getFullYear());

    return `${yyyy}-${mm}-${dd}`;
  }

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setFiltroData({
      inicio: formatDate(firstDay),
      fim: formatDate(lastDay)
    });
  }

  return (
    <button 
      style={style}
      onClick={() => setMes(n)}
    >
      {nomeMes(n)}
    </button>
  )
}
