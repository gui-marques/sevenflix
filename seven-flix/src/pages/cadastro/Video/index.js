import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../Componentes/FormField';
import Button from '../../../Componentes/Button';



function CadastroVideo () {
    const history = useHistory();
    const {handleChenge, values } = useForm({

    });
    
    return (
        <PageDefault>
            
            <h1>Cadastro de video</h1>

  <form onSubmit={(event) => {
      event.preventDefault();
      alert('adasda');
      history.push('/');
  }}
        >
           
                <FormField
                    label="Titulo do Video"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChenge}
                />
         <Button type="submit">
            Cadastrar
          </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar categoria

            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;