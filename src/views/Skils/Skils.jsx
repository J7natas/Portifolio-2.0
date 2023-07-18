import iconHtnl from '../../assets/images-skils/icon-html.svg';
import iconCss from '../../assets/images-skils/icon-css.svg';
import iconJs from '../../assets/images-skils/icon-js.svg';
import iconBootstrap from '../../assets/images-skils/icon-bootstrap.svg';
import iconReact from '../../assets/images-skils/icon-react.svg';
import iconSass from '../../assets/images-skils/icon-sass.svg';
import iconFigma from '../../assets/images-skils/icon-figma.svg';
import iconGit from '../../assets/images-skils/icon-git.svg';

import { motion } from 'framer-motion';

import './index.scss';

const Skils = () => {
  return (
     <section className='Skils'>
      <div className='Skils__Area-Title'>
          <h1>MY SOFTWARE SKILS</h1>
      </div>

        <div className='Skils__Bar-height-1'></div>
        <div className='Skils__Bar-height-2'></div>
        <div className='Skils__Bar-height-3'></div>
        <div className='Skils__Bar-height-4'></div>
        <div className='Skils__Bar-height-5'></div>

        <motion.div
             initial={{ width:'1000' }}
             animate={{ width:'100%' }}     
            className='Skils__Container'>
            <div className='Skils__Skil-Category-1'>
                <img src={iconHtnl} />
                <img src={iconCss} />
                <img src={iconJs} />
                <img src={iconReact} />
            </div>
            <div className='Skils__Skil-Category-2'>
                <img src={iconBootstrap} />
                <img src={iconGit} />
                <img src={iconSass} />
                <img src={iconFigma} />
            </div>
        </motion.div>

        <div className='Skils__Bar-bottom-1'></div>
        <div className='Skils__Bar-bottom-2'></div>
        <div className='Skils__Bar-bottom-3'></div>
        <div className='Skils__Bar-bottom-4'></div>
        <div className='Skils__Bar-bottom-5'></div>

     </section>
  )
}

export default Skils;