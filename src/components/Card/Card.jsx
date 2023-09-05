
import  './index.scss';

const Card = ({ img, title, text, description, site, repo  }) => {
    return(
        <section className="Card">
                <img className='Card__img' alt='error' src={img} />
            <div className='Card__Description'>
                <h3>Titulo: {title}</h3>
                <p><span>Tecnologias: </span>{text}</p>
                <p><strong>Descição: </strong>{description}</p>
                <a target='blanck' href={repo}><button className='Card__Button-repositori'>Acesse o repositório</button></a>
                <a target='blanck' href={site}><button className='Card__Button-site'>Acesse o site</button></a>
            </div>
        </section>
    )
}

export default Card;