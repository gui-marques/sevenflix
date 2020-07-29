import React from 'react';
import Footer from '../Componentes/Footer';
import Menu from '../Componentes/Menu';
import Styled from 'styled-components';

const Main = Styled.main `
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
`;


function PageDefault({ children }) {

return(
    <>
   <Menu />
   <Main >
    {children}
   </Main>
    <Footer />
    </>
 );
}

export default PageDefault;