import css from './Card.module.css'
const Card = ({ data }) => {
    return (
        <>  
            <div className={css.Card__title}>
                <h2 >{data.name}</h2>
                <p>{(data.name) ? `${data.main.temp} °C` : " "}</p>

            </div>
            

            <ul className={css.Card__list}>
                <li className="Card__item">
                    <p className="bio">{(data.name)? `${data.wind.speed} m/s` : " "}</p>
                    <p>Wind Speed</p>
                </li>
                <li className="Card__item">
                    <p className="bio">{(data.name)? `${data.clouds.all} %` : " "}</p>
                    <p className="bio">Clouds</p>
                </li>
                <li className="Card__item">
                    <p>{(data.name)? `${data.main.feels_like} °C` : " "}</p>
                    <p className="bio">Fields Like</p>
                </li>
                <li className="Card__item">
                    <p>{(data.name) ? data.sys.sunrise : " "}</p>
                    <p className="bio">Sun Rise</p>
                    
                </li>
                <li>
                    <p>{(data.name) ? data.sys.sunset : " "}</p>
                    <p className="bio">Sun Set</p>
                </li>
            </ul>

        </>
    )
}

export default Card;