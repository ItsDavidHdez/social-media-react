import React from 'react';
import './css/Overview.css';
import CardSmall from './CardSmall';

const cardSmallList = [
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 3,
        key: 1,
    },
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '52',
        growth: 2,
        key: 2,
    },
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '5462',
        growth: 2257,
        key: 3,
    },
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '52K',
        growth: 1375,
        key: 4,
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '117',
        growth: 303,
        key: 5,
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '507',
        growth: 553,
        key: 6,
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '107',
        growth: 19,
        key: 7,
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '1407',
        growth: 12,
        key: 8,
    },
]

const Overview = () => {
    return (
        <section className="overview">
        <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">
                {
                    cardSmallList.map((smallData) => <CardSmall key={smallData.key} {...smallData} />)
                }



                {/* <div className="card-small">
                    <p className="card-small-view">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-facebook.svg" alt="" />
                    </p>
                    <p className="card-small-number">52</p>
                    <p className="card-small-percentage is-danger">
                        <span>
                            <img src="./images/icon-down.svg" alt="" />
                            2%
                        </span>
                    </p>
                </div>
                <div className="card-small">
                    <p className="card-small-view">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-instagram.svg" alt="" />
                    </p>
                    <p className="card-small-number">5462</p>
                    <p className="card-small-percentage">
                        <span>
                            <img src="./images/icon-up.svg" alt="" />
                            2257%
                        </span>
                    </p>
                </div>
                <div className="card-small">
                    <p className="card-small-view">Profile views</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-instagram.svg" alt="" />
                    </p>
                    <p className="card-small-number">52K</p>
                    <p className="card-small-percentage">
                        <span>
                            <img src="./images/icon-up.svg" alt="" />
                            1375%
                        </span>
                    </p>
                </div>
                <div className="card-small">
                    <p className="card-small-view">Retweets</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-twitter.svg" alt="" />
                    </p>
                    <p className="card-small-number">117</p>
                    <p className="card-small-percentage">
                        <span>
                            <img src="./images/icon-up.svg" alt="" />
                            303%
                        </span>
                    </p>
                </div>
                <div className="card-small">
                    <p className="card-small-view">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-twitter.svg" alt="" />
                    </p>
                    <p className="card-small-number">507</p>
                    <p className="card-small-percentage">
                        <span>
                            <img src="./images/icon-up.svg" alt=""/>
                            553%
                        </span>
                    </p>
                </div>
                <div className="card-small">
                    <p className="card-small-view">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-facebook.svg" alt="" />
                    </p>
                    <p className="card-small-number">107</p>
                    <p className="card-small-percentage is-danger">
                        <span>
                            <img src="./images/icon-down.svg" alt="" />
                            19%
                        </span>
                    </p>
                </div>
                <div className="card-small">
                    <p className="card-small-view">Total views</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-facebook.svg" alt="" />
                    </p>
                    <p className="card-small-number">1407</p>
                    <p className="card-small-percentage is-danger">
                        <span>
                            <img src="./images/icon-down.svg" alt="" />
                            12%
                        </span>
                    </p>
                </div> */}
            </div>
        </div>
    </section>
    );
}

export default Overview;