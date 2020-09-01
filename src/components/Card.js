import React from 'react';
import './css/Card.css';

const Card = ({userName, followers, todayFollowers, icon, color}) => {
    console.log(color)
    const cardClass = `card ${color}`
    return(
        <article className={cardClass}>
            <p className="card-title">
                <img src={icon} alt="Icon social media" />
                {userName}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
                <img src="./images/icon-up.svg" alt="" />
                {todayFollowers} Today
            </p>
        </article>
    );
}

export default Card;