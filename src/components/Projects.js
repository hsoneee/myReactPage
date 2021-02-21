import React from 'react';
import styled from 'styled-components';

const ProjectBlock = styled.section`
    height: auto;
    padding: 20vh 0;
    background: rgba(0,0,255,0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ProjectWrap = styled.div`
    padding: 0 3vw;
    box-sizing: border-box;
    text-align: center;
`;
const Project = styled.div`
    background: rgba(255,255,255,0.5);
    display: inline-block;
    margin: 30px;
    width: 300px;
    height: 300px;
`;
export default function Projects(){

    return(
        <ProjectBlock>
            <h2>Work</h2>
            <ProjectWrap>
                <Project>
                    1번
                </Project>
                <Project>
                    2번
                </Project>
                <Project>
                    3번
                </Project>
                <Project>
                    4번
                </Project>
                <Project>
                    5번
                </Project>
                <Project>
                    6번
                </Project>
            </ProjectWrap>
        </ProjectBlock>
    );
}