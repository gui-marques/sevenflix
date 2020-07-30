import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefoult from '../../../../PageDefault';
import FormField from '../../../../Componentes/FormField'
import Button from '../../../../Componentes/Button'

function CadastroCategoria() {
  const valoresInicial = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicial);


  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }


  function handleChenge(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValue(
      name, value    
      );
  }

    return (
      <PageDefoult>
        <h1>Cadastro de Categoria: {values.nome}</h1> 
  
        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
          ...categorias,
          values]); 
          
          setValues(valoresInicial)
      }}>


      
  <FormField
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={ handleChenge } />


  {/*<div> 
      <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value= {values.descricao}
              onChange={ handleChenge }
            />
          </label>
          </div>
  */}
 <FormField
        label="Descrição: "
        type="textarea"        
        name="descricao"
        value={values.descricao}
        onChange={ handleChenge } />



  {/* <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value= {values.cor}
              onChange={ handleChenge }
            />
          </label>
           </div>
           */}
           <FormField
         label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={ handleChenge } />

          <Button>
            Cadastrar
          </Button>
        </form>
        <div>
         <ul>
            {categorias.map((categoria,indice) =>{
              return(
                <li key={`&{categoria}${indice}`}>
                  {categoria.nome}
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