
import { useState } from 'react';
import  './index.scss';

const Card = ({ img, title, text, description, site, repo  }) => {

    const [info, setInfo] = useState(false);

    function onInfo() {
        setInfo(true);
    }

    function offInfo() {
        setInfo(false);
    }

    return(
        <section onMouseLeave={offInfo} className="Card">
                <img onMouseEnter={onInfo} className='Card__img' alt='error' src={img} />
                {info === true &&(
                <div className='Card__Description'>
                    <h3>Titulo: {title}</h3>
                    <p><span>Tecnologias: </span>{text}</p>
                    <p><strong>Descição: </strong>{description}</p>
                    <a target='blanck' href={repo}><button className='Card__Button-repositori'>Acesse o repositório</button></a>
                    <a target='blanck' href={site}><button className='Card__Button-site'>Acesse o site</button></a>
                </div>
                    )
                }
        </section>
    )
}

export default Card;