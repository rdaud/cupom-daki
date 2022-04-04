import styled from 'styled-components'


export const Container = styled.div`
	max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
	margin: 0 auto;
    
    @media (max-width: 650px) {
        margin: 0 2rem;
    }
    @media (max-width: 850px) {
        margin: 0 1rem;
    }
  
`

export const FullWidthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
	margin: 0 auto;
	width: 100%;
    background: white;
`