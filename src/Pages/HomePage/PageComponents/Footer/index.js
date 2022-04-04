import React from 'react';
import { ReactComponent as Logo } from '../../../../Assets/logo-cupom-daki.svg'
import styled from 'styled-components';
import { FullWidthContainer } from '../../../../Components';

const Wrapper = styled.footer`
    width: 100%;
    background: white;
`

export const Footer = () => {
    return (
        <Wrapper as={ FullWidthContainer }>
            <Logo width={250}/>
        </Wrapper>
    )
}