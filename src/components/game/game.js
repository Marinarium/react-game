import React, {Component} from "react";
import Card from "../card/card";

import './game.scss';

export default class Game extends Component {

    // state = {
    //     count: 0
    // };
    //
    // countClick = () => {
    //     this.setState({ count: this.state.count + 1 })
    //     console.log(this.state.count);
    // }

    render() {
        const {cards, onCountClick, onSelectCard} = this.props;

        const firstGuessElem = cards.filter((el) => el.firstGuess);
        const secondGuessElem = cards.filter((el) => el.secondGuess);

        if (firstGuessElem[0] && secondGuessElem[0]) {
            if (firstGuessElem[0].name === secondGuessElem[0].name
                && firstGuessElem[0].id !== secondGuessElem[0].id) {
                firstGuessElem[0].match = true;
                secondGuessElem[0].match = true;
                firstGuessElem[0].firstGuess = false;
                secondGuessElem[0].secondGuess = false;
            } else {
                firstGuessElem[0].firstGuess = false;
                secondGuessElem[0].secondGuess = false;
                firstGuessElem[0].selected = false;
                secondGuessElem[0].selected = false;
            }
        }

        const allCards = cards.map((item) => {
            const {id, img, name, firstGuess, ...itemProps} = item;
            return (
                <Card {...itemProps}
                      key={id}
                      style={{backgroundImage: `url(${img})`}}
                      onSelectCard={() => onSelectCard(id, name, firstGuess)}
                      onCountClick={() => onCountClick(id)}/>
            );
        });

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
                    {allCards}
                </section>
                <div className="buttons">
                    <button className="button button__new-game" type="button">New Game</button>
                    <button className="button button__finish" type="button">Finish</button>
                </div>
            </section>
        );
    }
}