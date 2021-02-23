import React, {Component} from "react";

import './card.scss';

export default class Card extends Component {

    render() {

        const cards = this.props.cards;
        const twoPacksOfCards = [...cards, ...cards];
        let i = 0;

        const allCards = twoPacksOfCards.map(({name, img}) => {
            return (
                <div className="card"
                     key={i++}
                     style={{backgroundImage: `url(${img})`}}>
                </div>
            );
        });

        return(
            <div>
               {allCards}
            </div>
        )
    }
}