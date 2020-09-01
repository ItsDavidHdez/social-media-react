import React from 'react';
import Card from './Card';

const TopCards = () => {

    const cardListData = [
        {
            userName: '@nanthanf',
            id: 1,
            followers: '1987',
            todayFollowers: 20,
            icon: 'images/icon-facebook.svg',
            color: 'facebook',
        },
        {
            userName: '@nanthanf',
            id: 2,
            followers: '1044',
            todayFollowers: -6,
            icon: 'images/icon-twitter.svg',
            color: 'twitter',
        },
        {
            userName: '@nanthanf',
            id: 3,
            followers: '11K',
            todayFollowers: 68,
            icon: 'images/icon-instagram.svg',
            color: 'instagram',
        },
        {
            userName: '@nanthanf',
            id: 4,
            followers: '1987',
            todayFollowers: 41,
            icon: 'images/icon-youtube.svg',
            color: 'youtube'
        },
    ]

    return(
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />
                    )
                }

                {/* <article className="card twitter">
                    <p className="card-title">
                        <img src="./images/icon-twitter.svg" alt="" />
                        @nanthanf
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1044</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="./images/icon-up.svg" alt="" />
                        12 Today
                    </p>
                </article>
                <article className="card instagram">
                    <p className="card-title">
                        <img src="./images/icon-instagram.svg" alt="" />
                        @nanthanf
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">11K</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="./images/icon-up.svg" alt="" />
                        12 Today
                    </p>
                </article>
                <article className="card youtube">
                    <p className="card-title">
                        <img src="./images/icon-youtube.svg" alt="" />
                        @nanthanf
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1987</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="./images/icon-up.svg" alt="" />
                        12 Today
                    </p>
                </article> */}
            </div>
        </div>
    </section>
    );
}

export default TopCards;