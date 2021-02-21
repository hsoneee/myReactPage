import React from 'react';
import styled from 'styled-components';

const AboutBlock = styled.section`
    height: 100vh;
    background: rgba(255,0,0,0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function ABOUT(){

    return(
        <AboutBlock>
            <article>
                <h2 style={{textAlign: 'center'}}>ABOUT ME</h2>
                <p>
                    안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                </p>
            </article>
            <article>
                <h2 style={{textAlign: 'center'}}>SKILL</h2>
                <p>
                    안녕안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
                </p>
            </article>
        </AboutBlock>
    );
}