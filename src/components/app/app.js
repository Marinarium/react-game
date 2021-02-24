import React, {Component} from 'react';

import Header from "../header/header";
import Footer from "../footer/footer";
import GameDescription from "../game-description/game-description";
import Game from "../game/game";
import Settings from "../settings/settings";
import Statistic from "../statistic/statistic";

import './app.scss';

import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {

    render() {
        const cardsData = [
            {
                name: 'shell',
                img: 'images/blueshell.png',
            },
            {
                name: 'star',
                img: 'images/star.png',
            },
            {
                name: 'bobomb',
                img: 'images/bobomb.png',
            },
            {
                name: 'mario',
                img: 'images/mario.png',
            },
            {
                name: 'luigi',
                img: 'images/luigi.png',
            },
            {
                name: 'peach',
                img: 'images/peach.png',
            },
            {
                name: '1up',
                img: 'images/1up.png',
            },
            {
                name: 'mushroom',
                img: 'images/mushroom.png',
            },
            {
                name: 'thwomp',
                img: 'images/thwomp.png',
            },
            {
                name: 'bulletbill',
                img: 'images/bulletbill.png',
            },
            {
                name: 'coin',
                img: 'images/coin.png',
            },
            {
                name: 'goomba',
                img: 'images/goomba.png',
            },
        ];

        return (
            <Router>
                <div className='main-wrapper'>
                    <Header/>
                    <main className='main'>
                        <Route path="/" component={GameDescription} exact/>
                        <Route
                            path="/game"
                            render={(props) => <Game cards={cardsData} />}
                        />
                        <Route path="/settings" component={Settings}/>
                        <Route path="/statistic" component={Statistic}/>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
