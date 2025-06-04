import { CampoForm, Formulario, InputText, Separador, Subtitulodireita, TextoForm, Titulodireita } from "../../pages/Cadastro/style.jsx";
import { BotaoRedeSocial } from "../../pages/Cadastro/style.jsx";
import { DivBotaoRedeSocial } from "../../pages/Cadastro/style.jsx";
import LogoGoogle from "../../assets/LogoIconGoogle.svg"
import LogoOutlook from "../../assets/LogoIconOutlook.svg"
import { FormTamanho } from "../../pages/Cadastro/style.jsx";
import { Input } from "../../pages/Cadastro/style.jsx";
import { Botao } from "../../pages/Cadastro/style.jsx";
import { Linha } from "../../pages/Cadastro/style.jsx";
import { LinkStyle } from "../../pages/Cadastro/style.jsx";

export const CadastroForm = () => {
    return (
        <FormTamanho>
            <TextoForm>
                <Titulodireita>Crie sua conta</Titulodireita>
                <Subtitulodireita>Insira seus dados pessoais para criar sua conta</Subtitulodireita>
            </TextoForm>
            

            {/* botões do google e do outlook */}
            <DivBotaoRedeSocial>
                <BotaoRedeSocial>
                    <img src={LogoGoogle}></img>
                    <h2>Google</h2>
                </BotaoRedeSocial>
                <BotaoRedeSocial>
                    <img src={LogoOutlook}></img>
                    <h2>Outlook</h2>
                </BotaoRedeSocial>
            </DivBotaoRedeSocial>

            <Separador>Ou</Separador>

            {/* Formulário agora */}
            <Formulario>
                <Linha>
                    <CampoForm>
                        <InputText>Nome</InputText>
                        <Input placeholder="Nome"></Input>
                    </CampoForm>
                    <CampoForm>
                        <InputText>Sobrenome</InputText>
                        <Input placeholder="Sobrenome"></Input>
                    </CampoForm>
                    
                </Linha>
                <CampoForm>
                    <InputText>Email</InputText>
                    <Input placeholder="fulanadetal@hotmail.com.br" type="email"></Input>
                </CampoForm>
                
                <CampoForm>
                    <InputText>Senha</InputText>
                    <Input type="password" placeholder="Digite sua senha"></Input>
                </CampoForm>
                
                <LinkStyle to='/'><Botao type="submit">Entrar</Botao></LinkStyle>
            </Formulario>

        </FormTamanho>
    )
}