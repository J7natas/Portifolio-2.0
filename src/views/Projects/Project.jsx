
import './index.scss';

import imgProject1 from '../../assets/images-projects/image-project-1.png';
import imgProject2 from '../../assets/images-projects/image-project-2.png';
import imgProject3 from '../../assets/images-projects/image-project-3.png';
import imgProject4 from '../../assets/images-projects/image-project-4.png';

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

      <div className='Project__Container'>
          <div className='Project__Container-Projects'>
            <a href='https://movie-list-beryl-nine.vercel.app/' target='_blank'>
              <img src={imgProject1} />
              <h3>MOVIE LIST</h3>
            </a>
          </div>
          <div className='Project__Container-Projects'>
            <a href='https://product-page-gold.vercel.app/' target='_blank'>
              <img src={imgProject2} />
              <h3>PRODUCT PAGE</h3>
            </a>
          </div>
          <div className='Project__Container-Projects'>
            <a href='https://space-tourism-dun-gamma.vercel.app/' target='_blank'>
              <img src={imgProject3} />
              <h3>SPACE TOURISM</h3>
            </a>
          </div>
          <div className='Project__Container-Projects'>
            <a href='https://tabela-de-produto.vercel.app/' target='_blank'>
              <img src={imgProject4} />
              <h3>PRODUCT TABLE</h3>
            </a>
          </div>
      </div>
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