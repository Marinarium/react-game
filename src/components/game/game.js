import React, {Component} from "react";

import './game.scss';

export default class Game extends Component {
    render() {
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
                <section className="game-box"></section>
                <div className="buttons">
                    <button className="button button__new-game" type="button">New Game</button>
                    <button className="button button__finish" type="button">Finish</button>
                </div>
            </section>
        );
    }
}