import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const HelloBlock = styled.section`
    height: 100vh;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function Hello(){
    return(
        <HelloBlock>
            <h2 style={{display: 'none'}}>Hello</h2>
            <p>어쩌고 개발자 심혜선입니다</p>
            <ul style={{display: 'flex'}}>
                <li style={{margin: '0 1vw'}}>
                    <FontAwesomeIcon icon={faHeart}/>
                </li>
                <li style={{margin: '0 1vw'}}>
                    <FontAwesomeIcon icon={faHeart}/>
                </li>
                <li style={{margin: '0 1vw'}}>
                    <FontAwesomeIcon icon={faHeart}/>
                </li>
            </ul>
        </HelloBlock>
    );
}