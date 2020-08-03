import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PageDefoult from '../../../../PageDefault';
import FormField from '../../../../Componentes/FormField';
import Button from '../../../../Componentes/Button';
import useForm from '../../../../hooks/useForm';


function CadastroCategoria() {
  const valoresInicial = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const { handleChenge, values, clearForm } = useForm(valoresInicial);  
  const [categorias, setCategorias] = useState([]);



   
      
    return (
      <PageDefoult>
        <h1>Cadastro de Categoria: {values.nome}</h1> 
  
        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
          ...categorias,
          values]); 
          
         clearForm()
      }}>


      
  <FormField
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={ handleChenge } />



 <FormField
        label="Descrição: "
        type="textarea"        
        name="descricao"
        value={values.descricao}
        onChange={ handleChenge } />

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
      
        { categorias.length === 0 && (<div>
          Loading...
        </div>
        )}

         <ul>
            {categorias.map((categoria) =>{
               
              return(
                <li key={`${categoria.titulo}`}>
                  {categoria.titulo}
                 
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