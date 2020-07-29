import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';



function CadastroVideo () {
    
    return (
        <PageDefault>
            <h1>Cadastro de video</h1>
            <Link to="/cadastro/categoria">
                <h2>Cadastrar categoria</h2>

            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;