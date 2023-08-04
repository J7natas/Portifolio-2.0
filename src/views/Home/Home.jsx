import './index.scss';
import perfil from '../../assets/foto-perfil.png';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {

  const [text, setText] = useState('');
  const rotate = ['my name is Jônatas |', 'Front end Developer|'];
  const [loop, setLoop] = useState(0);
  const period = 105;
  const [delta, setDelta] = useState(100);
  const [delet, setDelet] = useState(false);

  useEffect( () =>{
    let ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {clearInterval(ticker)}
  },[text]);

  const toType = () => {
    let i = loop % rotate.length;
    let fullText = rotate[i];
    let updateText = delet ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

    setText(updateText);

    if(!delet && updateText === fullText){
      setDelet(true);
      setDelta(period);
    }else if(delet && updateText === '') {
      setDelet(false);
      setDelta(period);
      setLoop(loop+1);
    }
  }

  return (
    <motion.section
      initial={{ width:'0' }}
      animate={{ width:'100%' }}
      className='Home'>
      <div className='Home__Container'>
        <div className='Home__Area-Left'>
          <div className='Home__Title'>
            <h1>{text}</h1>
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