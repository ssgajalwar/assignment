import './App.css';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import ObjMove from './Components/ObjMove';
import Works from './Components/Works';
import Companies from './Components/Companies';
import Faq from './Components/Faq';
import Skills from './Components/Skills';
import Awards from './Components/Awards';
import Numbers from './Components/Numbers';
import Space from './Components/Space';
import Contact from './Components/Contact';
import Articles from './Components/Articles';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import FooterLinks from './Components/FooterLinks';
import Copyright from './Components/Copyright';
import Marquee from './Components/Marquee';
import MediaQuery from 'react-responsive';
import NavResponsive from './Responsive/NavRes';
import { useState, useEffect } from 'react';
import React from 'react';
import Loader from './Components/Loader';



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (

     <>
     {loading?(<Loader/>):(    
    <div className="App">
      <MediaQuery minWidth={900} >
           <Nav className="component" />
      </MediaQuery>
 
      <MediaQuery maxWidth={900}>
          <NavResponsive className="component" />
      </MediaQuery>
       
       <Landing className="component"/>
       <ObjMove className="component"/>
       <Space/>
       <Marquee/>
       <Space/>
       <Works className="component"/>
       <Space/>
       <Companies className="component"/>
       <Space/>
       <Faq className="component"/>
       <Space/>
       <Skills className="comonent"/>
       <Space/>
       <Awards className="component"/>
       <Space/>
       <Numbers className="component" />
       <Space/>
       <Slider/>
       <Space/>
       <Space/>
       <Articles/>
       <Space/>
       <Contact/>
       <Space/>
       <Footer/>
       <FooterLinks/>
       <Copyright/>
    </div>
    )} 
    </>
  );
}

export default App;
