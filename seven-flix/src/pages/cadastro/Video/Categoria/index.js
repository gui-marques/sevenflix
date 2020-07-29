import React from 'react';
import {Link} from 'react-router-dom';
import PageDefoult from '../../../../PageDefault';

function CadastroCategoria() {
    return (
      <PageDefoult>
        <h1>Cadastro de Categoria</h1>
  
        <form>
  
          <label>
            Nome da Categoria:
            <input
              type="text"
            />
          </label>
  
          <button>
            Cadastrar
          </button>
        </form>
  
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefoult>
    )
  }
export default CadastroCategoria;