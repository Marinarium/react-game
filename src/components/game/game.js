import React, {Component} from "react";
import Card from "../card/card";

import './game.scss';
import {Link} from "react-router-dom";

export default class Game extends Component {
    render() {
        const cards = [
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
            <section className='game'>
                <section className="status">
                    <div className="status__row">
                        <h2 className="status__title">Game time:</h2>
                        <span className="status__state countdown">1:27</span>
                    </div>
                    <div className="status__row">
                        <h2 className="status__title">Score:</h2>
                        <span className="status__state score">1083</span>
                    </div>
                </section>
                <section className="game-box">
                    <Card cards={cards}/>
                </section>
                <div className="buttons">
                    <button className="button button__new-game" type="button">New Game</button>
                    <button className="button button__finish" type="button">Finish</button>
                </div>
            </section>
        );
    }
}