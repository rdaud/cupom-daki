import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../../Assets/logo-cupom-daki.svg'

const Wrapper = styled.header`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 3rem 0;
    height: 100px;
`

const Capsula = styled.div`
    border: 1px solid #ffffff50;
    border-radius: 0rem 0rem 1.5rem 1.5rem;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 0rem 2rem;
    background: rgba(225,255,255,.0);
    box-shadow: 0px 10px 30px #00000020;

`

const Divider = styled.div`
    width: 1px;
    height: 100%;
    background: #ffffff50;
`

export const Header = () => {
    return (
        <Wrapper>
            <Capsula>
                <Logo width={100}/>
            </Capsula>
        </Wrapper>
    )
}