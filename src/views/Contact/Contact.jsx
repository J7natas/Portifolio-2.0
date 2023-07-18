import iconFone from '../../assets/images-contact/icon-fone.svg';
import iconEmail from '../../assets/images-contact/icon--email.svg';
import iconWhatsap from '../../assets/images-contact/icon-whatsap.svg';
import iconLinkedin from '../../assets/images-contact/icon-linkedin.svg';
import iconGitHub from '../../assets/images-contact/icon-gitHub.svg';

import { motion } from 'framer-motion';

import './index.scss';

const Contact = () => {
  return (
    <section className='Contact'>
        <div className='Contact__Area-Title'>
          <h1>CONTACT</h1>
        </div>
        <motion.div
        initial={{ width:'0' }}
        animate={{ width:'100%' }}     
        className='Contact__Container'>
            <div className='Contact__Area-Left'>
                <div className='Contact__Cont'>
                    <img src={iconFone} />
                    <p>(31)995749033</p>
                </div>
                <div className='Contact__Cont'>
                    <img id='Left' src={iconEmail} />
                    <p>jonatshenrique@gmail.com</p>
                </div>
                <div className='Contact__Cont'>
                    <a href='https://wa.me/5531995749033' target='_blank'>
                    <img id='Left' src={iconWhatsap} />
                    </a>
                    <p>Whatsapp</p>
                </div>
            </div>
            <div className='Contact__Area-Rigth'>
                <div className='Contact__Cont'>
                    <a href='https://www.linkedin.com/in/jonatas-henrique-1b25ab196/' target='_blank'>
                    <img src={iconLinkedin} />
                    </a>
                    <p>Linkedin</p>
                </div>
                <div className='Contact__Cont'>
                    <a href='https://github.com/J7natas' target='_blank'>
                    <img src={iconGitHub} />
                    </a>
                    <p>Git-Hub</p>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact