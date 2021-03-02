import React, {Component} from "react";

import './card.scss';

export default class Card extends Component {

    render() {
        const {style, onCountClick, onSelectCard, selected, match, color} = this.props;
        // const audioClickOnCard = new Audio('audio/pew.mp3');
        // const start = () => {
        //     audioClickOnCard.play();
        // }

        let classNames = 'card';
        if (selected) {
            classNames += ' selected';
        }
        if (match) {
            classNames += ' match';
        }

        return (
            <div className={classNames}
                 onClick={(e) => {
                     onCountClick();
                     onSelectCard();
                 }}>
                <div className="front" style={{backgroundColor: `${color}`}}></div>
                <div className="back" style={style}></div>
            </div>
        )
    }
}
