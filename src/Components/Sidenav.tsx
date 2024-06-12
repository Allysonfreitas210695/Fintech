import React from 'react'

//Icons
import fintch from "../assets/fintech.svg"
import resumo from "../assets/icons/resumo.svg";
import vendas from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import configuracoes from "../assets/icons/configuracoes.svg";
import contato from "../assets/icons/contato.svg";
import sair from "../assets/icons/sair.svg";
import FintechSVG from '../assets/FintechSVG';
import { Link } from 'react-router-dom';

export default function Sidenav() {

  
  return (
    <nav className='sidenav box bg-3'>
      <FintechSVG title='Fintech Logo'/>
      <ul>
        <li>
            <span>
              <img src={resumo} alt="Logo de Resumo" />
            </span>
            <Link to={"/"}>
              Resumo
            </Link>
        </li>
        <li>
            <span>
              <img src={vendas} alt="Logo de Vendas" />
            </span>
            <Link to={"/vendas"}>
              Vendas
            </Link>
        </li>
        <li>
            <span>
              <img src={webhooks} alt="Logo de Webhooks" />
            </span>
            <a href="">Webhooks</a>
        </li>
        <li>
            <span>
              <img src={configuracoes} alt="Logo de Configuracoes" />
            </span>
            <a href="">Configuracoes</a>
        </li>
        <li>
            <span>
              <img src={contato} alt="Logo de Contato" />
            </span>
            <a href="">Contato</a>
        </li>
        <li>
            <span>
              <img src={sair} alt="Logo de Sair" />
            </span>
            <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  )
}
