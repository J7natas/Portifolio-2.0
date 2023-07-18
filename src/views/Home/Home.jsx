import './index.scss';
import perfil from '../../assets/foto-perfil.png';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ width:'0' }}
      animate={{ width:'100%' }}
      className='Home'>
      <div className='Home__Container'>
        <div className='Home__Area-Left'>
          <div className='Home__My-Name'>
            <h3>my name is Jônatas</h3>
          </div>
          <div className='Home__Title'>
            <h1>Front en<span>d</span> Developer</h1>
          </div>
          <div className='Home__Barras'>
            <div className='Home__Barra-1'></div>
            <div className='Home__Barra-2'></div>
            <div className='Home__Barra-3'></div>
            <div className='Home__Barra-4'></div>
          </div>
        </div>
        <div className='Home__Area-Rigth'>
          <motion.div
           initial={{ width:'0' }}
           animate={{ width:'100%' }}
          className='Home__Area-Perfil'>
              <motion.img
               initial={{ width:'0' }}
               animate={{ width:'100%' }}
              src={perfil} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home