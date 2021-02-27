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
        let matcher = false;

        if (firstGuessElem[0] && secondGuessElem[0]) {
            if (firstGuessElem[0].name === secondGuessElem[0].name
                && firstGuessElem[0].id !== secondGuessElem[0].id) {
                matcher = true;
            }

            if(firstGuessElem[0].id === secondGuessElem[0].id) {
                console.log('no', this.props.counter )
            }
        }

        const allCards = cards.map((item) => {
            const {id, img, name, firstGuess, ...itemProps} = item;
            return (
                <Card {...itemProps}
                      matcher={matcher}
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