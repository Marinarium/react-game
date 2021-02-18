import React, {Component} from 'react';

import './main.scss';

import GameDescription from "../game-description/game-description";
// import Game from "../game/game";
// import Settings from "../settings/settings";
// import Statistic from "../statistic/statistic";

export default class Main extends Component {
    render() {
        return (
            <main className='main'>
                <GameDescription/>
            </main>
        );
    }
}