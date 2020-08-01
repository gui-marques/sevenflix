import React, {useState, useEffect} from 'react';
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

    useEffect(() => {
    
      const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:3000/categorias'
      : 'https://seven-flix.herokuapp.com/categorias';
      fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    }, [

    ]);
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