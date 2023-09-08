import imgProject1 from '../../assets/images-projects/image-project-1.png';
import imgProject2 from '../../assets/images-projects/image-project-2.png';
import imgProject3 from '../../assets/images-projects/image-project-3.png';
import imgProject4 from '../../assets/images-projects/image-project-4.png';
import imgProject5 from '../../assets/images-projects/image-project-5.png';

import Card from '../../components/Card/Card';

import './index.scss';

import { motion } from 'framer-motion';

const Project = () => {

  return (
    <section className='Project'>
      <div className='Project__Area-Title'>
          <h1>MY PROJECTS</h1>
      </div>

      <div className='Project__Line-1'></div>
      <div className='Project__Line-2'></div>
      <div className='Project__Line-3'></div>
      <div className='Project__Line-4'></div>

      <motion.div
      initial={{ width:'0' }}
      animate={{ width:'100%' }}
      className='Project__Container'>
          <Card
              img={imgProject1}
              title="Movie list"
              text="React, Sass"
              description="Este projeto e feito com uma API de filmes onde ele mostra os filmes e voceê pode pesquisar por filmes" 
              site="https://movie-list-beryl-nine.vercel.app/" 
              repo="https://github.com/J7natas/Movie-List.git" 
              />
          <Card
            img={imgProject2}
            title="Product page"
            text="HTML, CSS, Java Script"
            description="Este projeto e para simular uma compra de um produto, ele manda o produto para o carrinho e vai calcular o valor final que o cliente ira pagar" 
            site="https://product-page-gold.vercel.app/" 
            repo="https://github.com/J7natas/product-page.git" 
          />
          <Card 
            img={imgProject3}
            title="Space tourim"
            text="React, Sass"
            description="Este projeto e um projeto basico do Front End Mentor, que mostra alguns planeta e fala sobre a tripulação" 
            site="https://space-tourism-dun-gamma.vercel.app/" 
            repo="https://github.com/J7natas/space-tourism.git" 
          />
          <Card
            img={imgProject4}
            title="Tabela de produtos"
            text="HTML, CSS, Java Script"
            description="Este projeto e apenas uma tabela de productos onde se pode adicionar e apagar produtos" 
            site="https://tabela-de-produto.vercel.app/" 
            repo="https://github.com/J7natas/Tabela-de-Produto.git" 
          />
          <Card
            img={imgProject5}
            title="Jordan Ecomerce"
            text="React, Sass, Expess, Node"
            description="Este projeto eu desenvolvi uma API de sapatos jordans e integrei ela ao front, ela lista os produtos" 
            site="https://jordan-ecomerce.vercel.app/" 
            repo="https://github.com/J7natas/jordan-ecomerce.git" 
          />
          
      </motion.div>
      <div className='Project__Lines-rigths'>
        <div className='Project__Line-Rigth-1'></div>
        <div className='Project__Line-Rigth-2'></div>
        <div className='Project__Line-Rigth-3'></div>
        <div className='Project__Line-Rigth-4'></div>
      </div>
    </section>
  )
}

export default Project;