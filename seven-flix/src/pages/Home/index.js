import React, {useEffect, useState } from 'react';
import categoriasRepository from '../../repositories/categorias.js';
import PageDefault from '../../PageDefault';
import BannerMain from '../../Componentes/BannerMain';
import Carousel from '../../Componentes/Carousel';

function Home() {

const [dadosInicial, setDadosIniciais] = useState([]);

useEffect(() => {
  categoriasRepository.getAllWithVideos()
  .then((categoriasComVideos) => {
    console.log(categoriasComVideos);
    setDadosIniciais(categoriasComVideos);
  })
  .catch((err) => {
    console.log(err.message);
  })
}, []);

  return (
    <PageDefault paddingAll={0}>
     
    {dadosInicial.length === 0 && (<div>Loading...</div>)}

    {dadosInicial.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosInicial[0].videos[0].titulo}
                url={dadosInicial[0].videos[0].url}
                videoDescription={dadosInicial[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosInicial[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

     
    
      </PageDefault>
      
  );
}

export default Home;