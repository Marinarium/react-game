import React, {Component} from "react";

import './card.scss';

export default class Card extends Component {

    state = {
        selected: ''
    };

    selectCard = () =>  {
        this.state.selected === '' ? this.setState({selected: 'selected'}) : this.setState({selected: ''});
    };

    render() {
        const {className, name, style} = this.props;
        const {selected} = this.state;

        return (
            <div className={`${className} ${selected}`}
                 style={style}
                 onClick={this.selectCard}>
            </div>
        )
    }
}