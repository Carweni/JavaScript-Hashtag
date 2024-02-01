import { useState } from "react";
import Hashtaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao.jsx"; 
import { ItemCardapio } from "./ItemCardapio.jsx";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

// export function App(){
// 	return <div>
// 		<h1>Título</h1>
// 		<h2>Subtítulo</h2>
// 	</div>	
// }

export function App(){
	const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
	const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

	return <>
		<img src={Hashtaurante} alt="" className="capa"/>
		<Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
		<div className="menu">
			{paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao = {item.descricao}
			preco = {item.preco} imagem = {item.imagem}/>)}
		</div>
	</>
}