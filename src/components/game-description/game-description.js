import React, {Component} from 'react';

import './game-description.scss';
import cover from './images/cover.svg'

import {Link} from 'react-router-dom'

export default class GameDescription extends Component {
    randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

    levels = [
        {name: 'easy', label: 'Easy-Peasy'},
        {name: 'pro', label: 'Pro'}
    ]

    topics = [
        {name: 'animals', label: 'Animals'},
        {name: 'plants', label: 'Plants'}
    ];

    colors = [
        {name: 'blue', label: 'Blue', colorCode: '#9DD6FA'},
        {name: 'random', label: 'Random', colorCode: this.randomColor }
    ];

    render() {

        const {topic, onTopicChange, level, onLevelChange, color, onColorChange, onNewGame} = this.props;

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

        const levels = this.levels.map(({name, label}) => {

            const isActive = level === name;
            const clazz = isActive ? 'active' : ''

            return (
                <button type='button'
                        className={`config__option ${clazz}`}
                        key={name}
                        onClick={() => onLevelChange(name)}>
                    {label}</button>
            );
        });

        const colors = this.colors.map(({name, label, colorCode}) => {

            const isActive = color === name;
            const clazz = isActive ? 'active' : ''

            return (
                <button type='button'
                        className={`config__option ${clazz}`}
                        key={name}
                        onClick={() => onColorChange(name, colorCode)}>
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
                                    {levels}
                                </div>
                            </div>
                            <div className="config__row">
                                <h4 className="config__subtitle">Topic:</h4>
                                <div className="config__options">
                                    {topics}
                                </div>
                            </div>
                            <div className="config__row">
                                <h4 className="config__subtitle">Back:</h4>
                                <div className="config__options">
                                    {colors}
                                </div>
                            </div>
                        </div>
                        <Link to="/game"
                              className="button config__btn-start"
                              onClick={() => onNewGame()}
                        >Start</Link>
                    </section>
                </div>
            </section>
        );
    }
}