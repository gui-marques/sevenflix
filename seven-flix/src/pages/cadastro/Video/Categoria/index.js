import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefoult from '../../../../PageDefault';




function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [values, setValues] = useState(valoresIniciais);
  
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    const {getAttribute, value} = infosDoEvento.target; 
    setValue(
    getAttribute('name'),
    value
    );
  }

    return (
      <PageDefoult>
        <h1>Cadastro de Categoria: {values.nome}</h1> 
  
        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
          ...categorias,
          values
        ]);      

        setValues(valoresIniciais)  

      }}>
        <div>
          <label>
            Nome da Categoria:
            <input 
              type="text"
              name="nome"
              value= {values.nome}
              onChange={handleChange}              
              />
          </label>
          <label>
            Descrição:
            <textarea
              type="text"
              value= {values.descricao}
              name="descricao"
              onChange={handleChange}             
          />
          </label>      
          </div>
          <div>
          <label>
            Cor:
            <input
              type="color"
              value= {values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
          </div>
          <button>
            Cadastrar
          </button>
        </form>
        
         <ul>
            {categorias.map((categoria, indice) => {
              return (
                <li key={`&{categoria}${indice}`}>
                  {categoria.nome}
                  </li>
              )
            })}
          </ul>
       
        <Link to="/">
          Ir para home
        </Link>
      </PageDefoult>
    )
  }
export default CadastroCategoria;