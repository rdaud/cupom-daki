import React from 'react';
import styled from 'styled-components';
import { Header, Cupom, Extras, Noticias, Footer } from './PageComponents';
import { Divider, Container } from '../../Components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HomePage = () => {
    return (
        <>
            <Header />
            <Main>
                <Cupom as={Container}/>
                <Divider />
                <Extras as={Container}/>
                <Divider />
                <Noticias as={Container}/>
                <Divider comFundo />
            </Main>
            <Footer />
        </>
    )
}

export default HomePage