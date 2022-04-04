import React from 'react';
import styled from 'styled-components';
import { Post } from '../../../../Components';
import { Container, FullWidthContainer } from '../../../../Components';
import { Slide } from 'react-reveal';
import POSTS from './DATA.js'

console.log(POSTS)


const Section = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-top: 6rem;
`

const Título = styled.h2`
    color: #2C58F6;
    margin-bottom: -1rem;
`

const PostsWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: stretch;
    gap: 1rem;
    margin-top: 3rem;
    @media (min-width: 800px) {
        flex-direction: row;
    }
    @media (max-width: 650px) {
        margin: 0 4rem;
    }
    @media (max-width: 850px) {
        margin: 0 1rem;
    }
`

const InnerWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
   
`


export const Noticias = () => {

  const sortedArray = POSTS.sort((a,b) => {
        // Convert string dates into `Date` objects
        const date1 = new Date(a.data);
        const date2 = new Date(b.data);
        console.log(date1, date2)
        return date2 - date1;
   })


  

    return (
        <Section as={ FullWidthContainer }>
            <InnerWrapper as={ Container }>
            <Slide bottom>
                <Título>
                    Daki na mídia
                </Título>
                <p style={{
                    "color": 'black'
                }}>
                    As principais notícias do app Daki que sairam na mídia
                </p>
                </Slide>
                <PostsWrapper>
                    <Slide bottom>
                        { sortedArray.map((item,index) => (
                            <Post
                                key={index}
                                titulo={item.título}
                                fonte={item.fonte}
                                data={item.data}
                                cor={item.cor}
                                descrição={item.descrição}
                                link={item.link}
                            />
                        ))}
                    </Slide>
                </PostsWrapper>
            </InnerWrapper>
        </Section>
    )
}