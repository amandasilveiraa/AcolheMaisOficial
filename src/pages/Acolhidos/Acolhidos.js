import { Header } from "../../components/Header/Header.js";
import { Main } from "../../styledGlobal.jsx";
import { Botao, IconeBotao, Pesquisar, Tabela, TabelaDiv, TituloPagina } from "./style.jsx";
import FiltroImg from "../../assets/FilterIcon.svg"
import { NavAcolhidos } from "./style.jsx";
import IconeAdicionar from "../../assets/AddIcon.svg"

export default function Acolhidos(){
    return(
        <>
            <Header />
            <Main>
                <NavAcolhidos>
                    <TituloPagina>ACOLHIDOS</TituloPagina>
                    <Botao><IconeBotao src={IconeAdicionar} />Adicionar</Botao>
                </NavAcolhidos>
                <NavAcolhidos>
                    <Pesquisar placeholder="Pesquisar" />
                    <Botao><IconeBotao src={FiltroImg} alt="icone de filtro" />Filtro</Botao>
                </NavAcolhidos>
                <TabelaDiv>
                    <Tabela>
                        <tr>
                            <th>Nome</th>
                            <th>Entrada</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>asdasd</td>
                            <td>dsdasd</td>
                            <td>dasdas</td>
                        </tr>
                        <tr>
                            <td>asdasd</td>
                            <td>dsdasd</td>
                            <td>dasdas</td>
                        </tr>
                    </Tabela>
                </TabelaDiv>
            </Main>
            
        </>
    )
}