import React, { createElement } from 'react'
import styled from 'styled-components'
import { Container, Divider } from '../../../../Components'
import './styles.css'



const Plate = styled.div`
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
`

const CodigoMobile = styled.div`
    padding: 1rem 2rem;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    width: 80%;
    margin-bottom: 1rem;
    background: #5566ff;
    border-radius: 1rem;
    border: 1px solid #ffffff50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .3s;
    cursor: pointer;
`

const Codigo = styled.div`
    padding: 1rem 2rem;
    background: #ffffff30;
    border-radius: 1rem;
    border: 1px solid #ffffff50;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .3s;
    position: relative;
    cursor: pointer;
    &:hover {
        transition: all .3s;
        box-shadow: 0px 10px 20px #00000010;
        transform: translateY(-5px);
    }
`

const Section = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    align-items: center;
    justify-content: center;
`

const TextoCopiar = styled.small`
    line-height: 1.5;
    font-weight: bold;
    opacity: .6;
    display: block;
    top: 10px;
   
`

const TextoCopiado = styled.small`
    line-height: 1.5;
    font-weight: bold;
    opacity: 0;
    bottom: 5px;
    transform: translateY(10px);
    transition: all 1s;
    position: absolute;
  
`

const Regras = styled.div`
    padding: 0rem 2rem;
`


export const Cupom = () => {
    // async function copyTextToClipboard(text) {
    //     if ('clipboard' in navigator) {
    //       return await navigator.clipboard.writeText(text);
    //     } else {
    //       return document.execCommand('copy', true, text);
    //     }
    //   }

    function copy() {
        var copyText = document.querySelector(".codigo-texto");
        copyText.select();
        document.execCommand("copy");
    }

    function handleClickEvent() {    
        const textoCopiar = document.querySelector('.copiar')
        const textoCopiado = document.querySelector('.copiado')
        const codigoTexto = document.querySelector('.codigo-texto')
        const codigoComp = document.querySelector('.codigo-comp')
        textoCopiar.classList.add('fade-out')
        textoCopiado.classList.add('fade-in')
        codigoComp.classList.add('copiado2', 'animate-button')
        copy()

    }

    return (
        <>
            <Section as={ Container }>
            <h1 style={{
                'opacity': '.7'
            }}>
                Cupons e descontos Daki - Fevereiro 2022
            </h1>
            <Plate>
                <h2 style={
                    {
                        'color': 'white',
                        'padding-top': '2rem',
                        
                    }
                }>
                    Cupom Daki <br />R$ 30 de desconto nas compras acima de R$ 100
                </h2>
                <Codigo className="codigo-comp" onClick={handleClickEvent}>
                    <input
                    type="text"
                    value="RD256436"
                    readonly="readonly"
                    tabindex="-1"
                    className="codigo-texto"
                    style={
                        {
                            'fontSize': '40px',
                            'fontWeight': 'bold',
                            'width': '100%'

                        }
                    }/>
                    <TextoCopiar
                        className="copiar"     
                    >Clique para copiar
                    </TextoCopiar>
                    <TextoCopiado
                        className="copiado"
                    >Copiado!
                    </TextoCopiado>  
                </Codigo>
                <Divider m/>
                <Regras>
                    <ol>
                        <p style={{ "fontWeight": "bold"}}>Regras</p>
                        <li>
                        Válido apenas para compras acima de R$ 100,00 efetuadas no app Daki
                        </li>
                        <li>
                        Válido somente para primeira compra.
                        </li>
                    </ol>
                </Regras>
            </Plate>
        </Section>
        </>
    )
}

const body = document.querySelector('body')
console.log(body)

function step(timestamp) {
    let a = window.scrollY
    const body = document.querySelector('body')
    const el = createElement('div')
    el.classList.add('codigo-mobile')
    el.style.opacity = 1;
    body.append(el)
    if ( a > window.innerHeight ) {
      
    } else {
        const el = document.querySelector('.codigo-mobile')
        el.style.opacity = 0;
    }
  
      window.requestAnimationFrame(step);
    
  }
  
  window.requestAnimationFrame(step);