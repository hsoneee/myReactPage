import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

const HeaderBlock = styled.header`
    position: fixed;
    width: 100%;
    background: rgba(0,0,0,0.7);
    color: #fff;
    box-shadow: 3px 3px 10px 3px rgba(0,0,0,0.3);
    display: flex;
    justify-content: space-around;
    height: 5vh;
    line-height: 5vh;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    cursor: pointer;
`;

export default function Header({activeMenu}){
    const [nav, setNav] = useState([
        {
            id: 1,
            title: 'HOME', 
            active: true,
        },{
            id: 2,
            title: 'ABOUT', 
            active: false,
        },{
            id: 3,
            title: 'PROJECTS', 
            active: false,
        },{
            id: 4,
            title: 'CONTACT',
            active: false,
        }
    ]);

    const onClick=(go)=>{
        if(go === 4) 
        window.scrollTo({
            top: window.innerHeight*4, 
            behavior: 'smooth'
        });
        else
        window.scrollTo({
            top: window.innerHeight*(go.id-1), 
            behavior: 'smooth'
        });
    }

    useEffect(()=>{
        setNav(nav.map((nav)=>
            nav.id===activeMenu
            ?{...nav, active: !nav.active}
            : {...nav, active: false}
        ));
    }, [activeMenu]);

    return(
        <HeaderBlock>
            <Nav>
                {nav.map((nav)=>
                    <div onClick={()=>{onClick(nav)}}  
                        key={nav.id} 
                        style={{
                            color: nav.active?'white': 'rgba(255,255,255,0.6)',
                            fontWeight: nav.active?'bold': 'normal',
                            margin: '0 5vw'
                        }}>
                        {nav.title}
                    </div>
                )}
            </Nav>
        </HeaderBlock>
    );
}