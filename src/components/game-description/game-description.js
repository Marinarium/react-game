import React, {Component} from 'react';

import './game-description.scss';
import cover from './images/cover.svg'

import {Link} from 'react-router-dom'

export default class GameDescription extends Component {
    topics = [
        {name: 'animals', label: 'Animals'},
        {name: 'plants', label: 'Plants'}
    ];

    render() {

        const {topic, onTopicChange} = this.props;

        const topics = this.topics.map(({name, label}) => {

            const isActive = topic === name;
            const clazz = isActive ? 'active' : ''

            return (
                <button type='button'
                        className={`config__option ${clazz}`}
                        key={name}
                        onClick={() => onTopicChange(name)}>
                    {label}</button>
            );
        });

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
                                <div className="config__options">
                                    {topics}
                                </div>
                            </div>
                            <div className="config__row">
                                <h4 className="config__subtitle">Сolor theme:</h4>
                                <div className="config__options"><span className="config__option limit_yes active">Blue</span> / <span className="config__option limit_no">Green</span></div>
                            </div>
                        </div>
                        <Link to="/game"
                              className="button config__btn-start"
                              >Start</Link>
                    </section>
                </div>
            </section>
        );
    }
}