import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../Componentes/FormField';
import Button from '../../../Componentes/Button';
import videosRepository from '../../../repositories/video'



function CadastroVideo () {
    const history = useHistory();
    const {handleChenge, values } = useForm({
    titulo: 'QUEM PENSA ENRIQUECE | Os 13 Passos Para o Sucesso | Napoleon Hill | RESUMO COMPLETO',
    url: 'https://www.youtube.com/watch?v=ShrNIBXef_s',
    categoria: 'Front-End',
    });
    
    return (
        <PageDefault>
            
            <h1>Cadastro de video</h1>

  <form onSubmit={(event) => {
      event.preventDefault();
      
      videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,

      })
      .then(() => { 
          console.log('Cadastrado com sucesso!');
        history.push('/');
      });
      
  }}
        >
           
                <FormField
                    label="Titulo do Video"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChenge}
                />

<FormField
                    label="URL"
                    name="url"
                    value={values.url}
                    onChange={handleChenge}
                />

<FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
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