import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    align-items: center;
`

export const PerfilInfo = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 42px;

    @media (max-width: 1020px){
        display: block;
    }
    
`

export const PerfilNav = styled.div`
    width: 30%;

    img {
        border-radius: 100%;
    }

    ul {
        list-style-type: none;
        margin-top: 18px;
    }

    ul li{
        font-weight: 600;
        color: #929292;
        font-size: 18px;
    }

    ul li:not(:last-child){
        margin-bottom: 12px;
    }

    ul li.active{
        color: #006233;
    }

    a {
        color: #929292;
        font-size: 18px;
    }

    h3 {
        margin-bottom: 2px;
        font-size: 22px;
    }

    @media (max-width: 1020px){
        margin-bottom: 32px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
`

export const InformacoesPessoais = styled.div`
    width: 70%;

    h2{
        margin-bottom: 18px;
    }

    @media (max-width: 1020px){
        width: 80%;
        margin-left: auto;
        margin-right: auto;

        h2{
            text-align: center;
            
        }
    }
`

export const Cards = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 14px;
    margin-bottom: 22px;

    @media (max-width: 1020px){
        justify-content: center;
    }
`

export const Card = styled.div`
    border: solid 1px black;
    border-radius: 20px;
    padding: 28px 22px;
    display: flex;
    justify-content: space-between;
    width: 300px;
    align-items: start;

    h4{
        margin-bottom: 12px;
    }

    img{
        width: 28px;
        
    }

    
`