import React from 'react';
import Footer from '../Componentes/Footer';
import Menu from '../Componentes/Menu';
import Styled, {css} from 'styled-components';

const Main = Styled.main `
background-color: var(--black);
color: var(--white);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
${({ paddingAll }) => paddingAll && css `
padding: ${paddingAll}`}
`;


function PageDefault({ children, paddingAll }) {

return(
    <>
   <Menu />
   <Main paddingAll={paddingAll}>
    {children}
   </Main>
    <Footer />
    </>
 );
}

export default PageDefault;