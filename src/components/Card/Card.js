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
                    <p className={css.bio}>{(data.name)? `${data.wind.speed} m/s` : " "}</p>
                    <p className={css.bio}>Wind Speed</p>
                </li>
                <li className="Card__item">
                    <p className={css.bio}>{(data.name)? `${data.clouds.all} %` : " "}</p>
                    <p className={css.bio}>Clouds</p>
                </li>
                <li className="Card__item">
                    <p className={css.bio}>{(data.name)? `${data.main.feels_like} °C` : " "}</p>
                    <p className={css.bio}>Fields Like</p>
                </li>
                <li className="Card__item">
                    <p className={css.bio}>{(data.name) ? (new Date(data.sys.sunrise * 1000).toLocaleTimeString()) : " "}</p>
                    <p className={css.bio}>Sun Rise</p>
                    
                </li>
                <li>
                    <p className={css.bio}>{(data.name) ? (
                        new Date(data.sys.sunset * 1000).toLocaleTimeString()
                    ) : " "}</p>
                    <p className={css.bio}>Sun Set</p>
                </li>
            </ul>

        </>
    )
}

export default Card;