import React from 'react';
import styled from 'styled-components';

const ContactBlock = styled.section`
    height: 100vh;
    background: rgba(255,255,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Contact(){

    return(
        <ContactBlock>
            <h2>Contact</h2>
        </ContactBlock>
    );
}