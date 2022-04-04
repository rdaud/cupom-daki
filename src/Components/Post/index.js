import React from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';

const cor1 = css`
    background: linear-gradient(209.21deg, rgb(94, 44, 141) 13.57%, rgb(211, 49, 137) 98.38%);
`
const cor2 = css`
    background: linear-gradient(209.21deg, rgb(179, 19, 49) 13.57%, rgb(209, 91, 88) 98.38%);
`
const cor3 = css`
    background: linear-gradient(209.21deg, rgb(4, 20, 104) 13.57%, rgb(73, 18, 229) 98.38%);
`

const Wrapper = styled.div`
    text-align: left;
    padding: 2rem 2rem 2.5rem 2rem;
    border-radius: 1.5rem;
    height: 110px;
    flex-grow: 1;
    flex-basis: 300px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    ${ props =>
        props.cor === 1 ? cor1 :
        props.cor === 2 ? cor2 :
        props.cor === 3 ? cor3 :
        cor1
    }
    box-shadow: rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
    @media (min-width: 800px) {
        max-width: 250px;
    }
    transition: all .3s;


    &:hover {
        transition: all .3s;
        box-shadow: 0px 10px 20px #00000060;
        transform: translateY(-5px);
    }
`

const Paragraph = styled.p`
    font-size 14px;
    overflow: hidden;
    white-space: normal;
    display: none;
`

export const Post = ({ titulo, descrição, link, fonte, data, cor }) => {
    return (
        <a href={ link } target="_blank">
        <Wrapper cor={cor}>
            <h3>
                { titulo }
            </h3>
            <span style={{
                "display": "inline-block",
            }}><small> { fonte } </small> • <small> { data }</small></span>
            <Paragraph>
                { descrição }
                </Paragraph>
        </Wrapper>
        </a>
    )
}