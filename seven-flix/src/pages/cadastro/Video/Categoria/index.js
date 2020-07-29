import React from 'react';
import {Link} from 'react-router-dom';
import PageDefoult from '../../../../PageDefault';

function CadastroCategoria(){
    return(

        <PageDefoult>
            <h2>Ir para Home</h2>
            <Link to="/">
                Ir para Home
            </Link>
        </PageDefoult>


    );
}

export default CadastroCategoria;