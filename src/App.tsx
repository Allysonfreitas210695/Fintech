import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Components 
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';

//Pages
import Resumo from './Pages/Resumo';
import Vendas from './Pages/Vendas';

//Styles
import './Style.css';
import Venda from './Pages/Venda';

function App() {
  return <>
    <BrowserRouter>
      <DataContextProvider>
        <div className='container'>
          <Sidenav/>
          <main>
            <Header/>
              <Routes>
                <Route path='/' Component={Resumo}/>
                <Route path='/vendas'  Component={Vendas}/>
                <Route path='/vendas/:id'  Component={Venda}/>
              </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  </>
}

export default App;
