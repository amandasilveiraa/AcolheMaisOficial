import { Link } from "react-router-dom";
import { Card, Cards, InformacoesPessoais, Nav, PerfilInfo, PerfilNav } from "./style";
import { Header } from "../../components/Header/Header";
import { Main } from "../../styledGlobal";
import FotoPerfil from "../../assets/sem_imagem_avatar.png"
import IconePessoa from "../../assets/AccountIcon.svg"
import IconeCalendario from "../../assets/CalendarIcon.svg"
import IconeLocal from "../../assets/GlobalLocationIcon.svg"
import IconeGlobo from "../../assets/GlobalLanguageIcon.svg"
import IconeEntrada from "../../assets/LoginIcon.svg"

export default function Perfil (){
    return(
        <>
            <Header />
            <Main>
                <Nav>
                    <h1>PERFIL</h1>
                    <h3>Editar informações</h3>
                </Nav>
                <PerfilInfo>
                    <PerfilNav>
                        <img src={FotoPerfil} width={'150px'}/>
                        <h3>Fulano de tal</h3>
                        <Link href="mailto:fulanodetal@hotmail.com">fulanodetal@hotmail.com</Link>
                        <ul>
                            <li className="active">Informações pessoais</li>
                            <li>Histórico médico</li>
                            <li>Documentações</li>
                        </ul>
                    </PerfilNav>
                    <InformacoesPessoais>
                        <h2>Informações pessoais</h2>
                        <Cards>
                            <Card>
                                <div>
                                    <h4>Nome</h4>
                                    <p>Fulana de Tal</p>
                                </div>
                                <img src={IconePessoa} />
                            </Card>
                            <Card>
                                <div>
                                    <h4>Data de nascimento</h4>
                                    <p>21/05/2005</p>
                                </div>
                                <img src={IconeCalendario} />
                            </Card>
                            <Card>
                                <div>
                                    <h4>País de origem</h4>
                                    <p>Brasil</p>
                                </div>
                                <img src={IconeLocal} />
                            </Card>
                            <Card>
                                <div>
                                    <h4>Linguagem</h4>
                                    <p>Português</p>
                                </div>
                                <img src={IconeGlobo} />
                            </Card>
                            <Card>
                                <div>
                                    <h4>Entrada</h4>
                                    <p>19/04/2025</p>
                                </div>
                                <img src={IconeEntrada} />
                            </Card>
                        </Cards>
                    </InformacoesPessoais>
                </PerfilInfo>
            </Main>
        </>
    )
}