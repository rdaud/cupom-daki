import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../../Components';
import { Slide } from 'react-reveal';

const Section = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

const Item = styled.div`
    text-align: left;
    padding: 2rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    background: rgba(15, 14, 71, 0.3);
    box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
`

const Pergunta = styled.h3`
`
const Resposta = styled.p`
opacity: .8;
`

export const Extras = () => {
    return (
        <Section as={ Container }>
            <Slide bottom>
                <Item>
                    <Pergunta>
                        O que é o Cupom Daki?
                    </Pergunta>
                    <Resposta>
                        Cupom Daki é um código promocional grátis que você utiliza no site da Daki e ganha desconto na hora.
                    </Resposta>
                </Item>
            </Slide>
            <Slide bottom>
                <Item>
                    <Pergunta>
                        O que comprar com o cupom Daki?
                    </Pergunta>
                    <Resposta>
                        Com o cupom da Daki você faz compras de supermercados direto do aplicativo da Daki e economiza R$ 30,00 em suas compras acima de R$100. São milhares de produtos que facilitam a sua vida e economiza o seu tempo de sair de casa. O melhor de tudo isso é que a entrega chega em até 15min. Super rápido.
                    <br/><br/>
                        Para utilizar esse benefício, baixe o aplicativo da Daki e utilize um dos cupons de desconto acima para economizar em suas compras.                </Resposta>
                </Item>
            </Slide>
            <Slide bottom>
                <Item>
                    <Pergunta>
                    Quais produtos a Daki vende?
                    </Pergunta>
                    <Resposta>
                    No aplicativo da Daki você encontra milhares de produtos. Acabou a bebida do churrasco? peça cervejas, vinhos, gim, entre outras e receba em 15min na sua casa. Voltou do supermercado e esqueceu algum tempero? Na Daki você encontra temperos diversos além de arroz, feijão, óleo, azeite, enlatados e muito mais.
                        <br/><br/>
                    Está se sentindo mal e não quer sair para o supermercado? Peça na Daki e receba seus produtos em até 15min. Você pode comprar remédios, preservativos, ração de PETS e muito mais.
                    </Resposta>
                </Item>
            </Slide>
            <Slide bottom>
                <Item>
                    <Pergunta>
                    Qual a diferença da Daki para a Rappi e iFood?                </Pergunta>
                    <Resposta>
                    A Daki possui uma rede própria de distribuição. Isso faz com que a logística da empresa consiga ser mais ágil e entregar os produtos de forma muito rápida. Os entregadores geralmente usam bicicletas elétricas, então o trânsito não atrapalha na entrega.

    Além disso, os produtos oferecidos no aplicativo da Daki são atualizados em tempo real. Ou seja, você não vai encontrar produtos no aplicativo que não estejam no estoque.
                    </Resposta>
                </Item>
            </Slide>

                
        </Section>
    )
}