import {Container, Esquerda, Direita, Logo, Titulo, Subtitulo} from './style.jsx';
import imgLogo from '../../assets/LogoBrancaAcolheMais.svg'
import { CadastroForm } from '../../components/FormularioCadastro/FormularioCadastro.js'

export default function Cadastro() {
    
    return (
        <>
            <Container>
                <Esquerda>
                    <Logo src={imgLogo}></Logo>
                    <Titulo>Crie sua conta</Titulo>
                    <Subtitulo>Complete esses simples passos para se registrar</Subtitulo>
                    
                </Esquerda>
                <Direita>
                    <CadastroForm></CadastroForm>
                </Direita>
            </Container>
            
        </>
    )
}