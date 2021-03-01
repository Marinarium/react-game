import React, {Component} from "react";

import './card.scss';

export default class Card extends Component {

    render() {
        const {style, onCountClick, onSelectCard, selected, match, color} = this.props;

        let classNames = 'card';
        if (selected) {
            classNames += ' selected';
        }
        if (match) {
            classNames += ' match';
        }

        // let choosenColor = color === 'random' ? '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6) : '#9DD6FA'

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
