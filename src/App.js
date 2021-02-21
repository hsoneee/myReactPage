import React, {useEffect, useState} from 'react';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Hello from './components/Hello';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [smenu, setMenu] = useState(0);

  window.addEventListener('scroll',function () {
    const pageY = window.innerHeight;
    let scrollValue = window.pageYOffset; 
    let menu;
    console.log(scrollValue)
    if(scrollValue >= 0 && scrollValue < pageY-(pageY*0.2)) menu=1;
    else if(scrollValue >= pageY-(pageY*0.2) && scrollValue < pageY*2-(pageY*0.2)) menu=2;
    else if(scrollValue >= pageY*3-(pageY*0.2) && scrollValue < pageY*4) menu=4;
    else menu=3;
    setMenu(menu);
  });
  
  return (
    <>
      <GlobalStyles />
      <Header activeMenu={smenu}/>
      <Hello/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
