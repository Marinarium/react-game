import React, {Component} from "react";

import './card.scss';

export default class Card extends Component {

    render() {
        const {style, onSelectCard, selected, match, color} = this.props;

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
                     onSelectCard();
                 }}>
                <div className="front" style={{backgroundColor: `${color}`}}></div>
                <div className="back" style={style}></div>
            </div>
        )
    }
}
