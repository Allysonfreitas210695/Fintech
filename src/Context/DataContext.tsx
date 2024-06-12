import React, { createContext, useContext, useState } from 'react'
import useFetch from '../Hooks/UseFetch';

interface IFiltroData {
  inicio: string;
  fim: string;
}

interface IDataContext {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  filtroData: IFiltroData;
  setFiltroData: React.Dispatch<React.SetStateAction<IFiltroData>>;
}

export interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
}

export const DataContext = createContext<IDataContext | null>(null);

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());

  return `${yyyy}-${mm}-${dd}`;
}


export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [filtroData, setFiltroData] = useState({
    inicio: getDate(30),
    fim: getDate(0),
  });

  const { data, loading, error } = useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${filtroData.inicio}&final=${filtroData.fim}`);

  return (
    <DataContext.Provider value={{
      data,
      loading,
      error,
      filtroData,
      setFiltroData
    }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  const context = useContext(DataContext);
  if(!context) throw new Error("DataContext precisa está no provider");

  return context;
}
