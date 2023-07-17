import iconHome from '../../assets/imagesHeader/icon-home.svg';
import iconProject from '../../assets/imagesHeader/icon-projetcts.svg';
import iconSkils from '../../assets/imagesHeader/icon-skills.svg';
import iconContact from '../../assets/imagesHeader/icon-contact.svg';
import './index.scss';

import { Link } from 'react-router-dom';


export const Header = () => {

    function ActiveHome() {
        let project = document.getElementById('project');
        let home = document.getElementById('home');
        let skils = document.getElementById('skil');
        let contact = document.getElementById('contact');

        home.classList.add('active');
        project.classList.remove('active');
        skils.classList.remove('active');
        contact.classList.remove('active');

    }

    function activeProject() {
        let project = document.getElementById('project');
        let home = document.getElementById('home');
        let skils = document.getElementById('skil');
        let contact = document.getElementById('contact');

        home.classList.remove('active-home');
        home.classList.remove('active');
        project.classList.add('active');
        project.classList.add('activeProject')
        skils.classList.remove('active');
        contact.classList.remove('active');

    }

    function activeSkils() {
        let project = document.getElementById('project');
        let home = document.getElementById('home');
        let skils = document.getElementById('skil');
        let contact = document.getElementById('contact');

        home.classList.remove('active-home');
        skils.classList.add('active');
        home.classList.remove('active');
        project.classList.remove('active');
        contact.classList.remove('active');

    }

    function activeContact() {
        let project = document.getElementById('project');
        let home = document.getElementById('home');
        let skils = document.getElementById('skil');
        let contact = document.getElementById('contact');

        home.classList.remove('active-home');
        skils.classList.remove('active');
        home.classList.remove('active');
        project.classList.remove('active');
        contact.classList.add('active');
    }

    return(
        <header id='header' className="Header">
          <div className="Header__icons">
            <Link to={'/'}>
                <div id='home' onClick={ActiveHome} className='Header__icon-white active-home'>
                    <img id='img' src={iconHome} />
                </div>
            </Link>
            <Link to={'/project'}>
                <div id='project' onClick={activeProject} className='Header__icon-white'>
                    <img className='activeProject' src={iconProject} />
                </div>
            </Link>
            <Link to={'/skils'}>
                <div id='skil' onClick={activeSkils} className='Header__icon-white'>
                    <img src={iconSkils} />
                </div>
            </Link>
            <div id='contact' onClick={activeContact} className='Header__icon-white'>
                <img src={iconContact} />
            </div>
          </div>
        </header>
    )
}