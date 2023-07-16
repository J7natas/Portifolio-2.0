import iconHome from '../../assets/imagesHeader/icon-home.svg';
import iconProject from '../../assets/imagesHeader/icon-projetcts.svg';
import iconSkils from '../../assets/imagesHeader/icon-skills.svg';
import iconContact from '../../assets/imagesHeader/icon-contact.svg';
import './index.scss';

export const Header = () => {
    return(
        <header className="Header">
          <div className="Header__icons">
            <div className='Header__icon-white'>
                <img src={iconHome} />
            </div>
            <div className='Header__icon-white'>
                <img src={iconProject} />
            </div>
            <div className='Header__icon-white'>
                <img src={iconSkils} />
            </div>
            <div className='Header__icon-white'>
                <img src={iconContact} />
            </div>
          </div>
        </header>
    )
}