import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    width: 100%;
    height: ${ props => props.g && '200px' || props.m && '100px' || '200px'};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${ props => props.comFundo ? 'white' : 'transparent'};
`

const Bar = styled.div`
    width: 32px;
    height: 2px;
    background: ${ props => props.comFundo ? 'black' : 'white'};
    opacity: .5;
`

export const Divider = ({ comFundo, ...rest }) => {
    return (
        <Wrapper comFundo={comFundo} {...rest}>
            <Bar comFundo={comFundo}/>
        </Wrapper>
    )
}