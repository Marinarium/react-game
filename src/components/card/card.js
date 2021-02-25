import React, {Component} from "react";

import './card.scss';

export default class Card extends Component {

    render() {
        const {style, onCountClick, onSelectCard, selected} = this.props;

        let classNames = 'card';
        if (selected) {
            classNames += ' selected';
        }

        return (
            <div className={classNames}
                 style={style}
                 onClick={(e) => {
                     onCountClick();
                     onSelectCard();
                 }}>
            </div>
        )
    }
}
