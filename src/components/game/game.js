import React, {Component} from "react";
import Card from "../card/card";

import './game.scss';

export default class Game extends Component {

    render() {
        const {cards, onSelectCard, gameState, color, onFinishGame, onNewGame, addStatisticItem} = this.props;

        const firstGuessElem = cards.filter((el) => el.firstGuess);
        const secondGuessElem = cards.filter((el) => el.secondGuess);

        if (firstGuessElem[0] && secondGuessElem[0]) {
            if (firstGuessElem[0].name === secondGuessElem[0].name
                && firstGuessElem[0].id !== secondGuessElem[0].id) {
                firstGuessElem[0].match = true;
                secondGuessElem[0].match = true;
                firstGuessElem[0].firstGuess = false;
                secondGuessElem[0].secondGuess = false;
                gameState.score += 10;
            } else {
                firstGuessElem[0].firstGuess = false;
                secondGuessElem[0].secondGuess = false;
                firstGuessElem[0].selected = false;
                secondGuessElem[0].selected = false;
                if (gameState.score > 0) {
                    gameState.score -= 2;
                }
            }
        }

        let finishGame = '';
        if (cards.every((el) => el.match)) {
            finishGame = `Thanks for the game!`;
        }

        const allCards = cards.map((item) => {
            const {id, img, name, firstGuess, ...itemProps} = item;
            return (
                <Card {...itemProps}
                      key={id}
                      color={color}
                      style={{backgroundImage: `url(${img})`}}
                      onSelectCard={() => onSelectCard(id, name, firstGuess)}/>
            );
        });

        return (
            <section className='game'>
                <section className="status">
                    <div className="status__row">
                        <h2 className="status__title">Score:</h2>
                        <span className="status__state score">{gameState.score}</span>
                    </div>
                </section>
                <section className="game-box">
                    <h2 className="finish-title">{finishGame}</h2>
                    {allCards}
                </section>
                <div className="buttons">
                    <button
                        className="button button__new-game"
                        type="button"
                        onClick={(e) => {
                            onNewGame();
                            addStatisticItem(gameState.score);
                        }}
                    >New Game
                    </button>
                    <button
                        className="button button__finish"
                        type="button"
                        onClick={(e) => {
                            onFinishGame();
                            addStatisticItem(gameState.score);
                        }}
                    >Finish
                    </button>
                </div>
            </section>
        );
    }

}