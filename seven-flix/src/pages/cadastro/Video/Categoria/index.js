import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefoult from '../../../../PageDefault';

function CadastroCategoria() {

  const [categorias, setCategorias] = useState(['teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes')

    return (
      <PageDefoult>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1> 
  
        <form onSubmit={function handleSubmit(infoDoEvento) {
          infoDoEvento.preventDefault();
          setCategorias([
          ...categorias,
          nomeDaCategoria]);        
      }}>
  
          <label>
            Nome da Categoria:
            <input
              type="text"
              value= {nomeDaCategoria}
              onChange={function lerdados(infoDoEvento){
                setNomeDaCategoria(infoDoEvento.target.value);

              }}
            />
          </label>
  
          <button>
            Cadastrar
          </button>
        </form>
        <div>
         <ul>
            {categorias.map((categoria,indice) =>{
              return(
                <li key={`&{categoria}${indice}`}>
                  {categoria}
                  </li>
              )
            })}
          </ul>
          </div>
        <Link to="/">
          Ir para home
        </Link>
      </PageDefoult>
    )
  }
export default CadastroCategoria;