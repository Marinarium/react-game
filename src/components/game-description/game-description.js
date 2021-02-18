import React, {Component} from 'react';

import './game-description.scss';
import cover from './images/cover.svg'

export default class GameDescription extends Component {
    render() {
        return (
            <section className='game-desc'>
                <div className="game-desc__frame">
                    <img src={cover} alt="cover" className="game-desc__img"/>
                </div>
                <div className="game-desc__info">
                    <h2 className="game-desc__title">Memory Game</h2>
                    <p className="game-desc__text">This is a card game in which all of the cards are laid face down on a
                        surface and two cards are flipped face up over each turn. The object of the game is to turn over
                        pairs of matching cards.</p>
                    <section className="config">
                        <h3 className="config__title">Configuration</h3>
                        <div className="config__box">
                            <div className="config__row">
                                <h4 className="config__subtitle">Level:</h4>
                                <div className="config__options">
                                    <button className="config__btn config__btn_minus config__btn_disabled" type='button'>-</button>
                                    <span className="config__level">1</span>
                                    <button className="config__btn config__btn_plus" type='button'>+</button>
                                </div>
                            </div>
                            <div className="config__row">
                                <h4 className="config__subtitle">Topic:</h4>
                                <div className="config__options"><span className="config__option topic_nature active">Nature</span> / <span className="config__option topic_things">Things</span></div>
                            </div>
                            <div className="config__row">
                                <h4 className="config__subtitle">Time limit:</h4>
                                <div className="config__options"><span className="config__option limit_yes active">Yes</span> / <span className="config__option limit_no">No</span></div>
                            </div>
                        </div>
                        <button className="button config__btn-start">Start</button>
                    </section>
                </div>
            </section>
        );
    }
}