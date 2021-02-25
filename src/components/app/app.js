import React, {Component} from 'react';

import Header from "../header/header";
import Footer from "../footer/footer";
import GameDescription from "../game-description/game-description";
import Game from "../game/game";
import Settings from "../settings/settings";
import Statistic from "../statistic/statistic";

import './app.scss';

import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
    someId = 100;

    state = {
        cardsData: [
            this.createCardItem('shell', 'images/blueshell.png'),
            this.createCardItem('star', 'images/star.png'),
            this.createCardItem('bobomb', 'images/bobomb.png'),
            this.createCardItem('mario', 'images/mario.png'),
            this.createCardItem('luigi', 'images/luigi.png'),
            this.createCardItem('peach', 'images/peach.png'),
            this.createCardItem('1up', 'images/1up.png'),
            this.createCardItem('mushroom', 'images/mushroom.png'),
            this.createCardItem('thwomp', 'images/thwomp.png'),
            this.createCardItem('bulletbill', 'images/bulletbill.png'),
            this.createCardItem('coin', 'images/coin.png'),
            this.createCardItem('goomba', 'images/goomba.png'),
            this.createCardItem('shell', 'images/blueshell.png'),
            this.createCardItem('star', 'images/star.png'),
            this.createCardItem('bobomb', 'images/bobomb.png'),
            this.createCardItem('mario', 'images/mario.png'),
            this.createCardItem('luigi', 'images/luigi.png'),
            this.createCardItem('peach', 'images/peach.png'),
            this.createCardItem('1up', 'images/1up.png'),
            this.createCardItem('mushroom', 'images/mushroom.png'),
            this.createCardItem('thwomp', 'images/thwomp.png'),
            this.createCardItem('bulletbill', 'images/bulletbill.png'),
            this.createCardItem('coin', 'images/coin.png'),
            this.createCardItem('goomba', 'images/goomba.png')
        ].sort(() => 0.5 - Math.random()),
        count: 0
    }

    createCardItem(name, img) {
        return {
            name: name,
            img: img,
            selected: false,
            id: this.someId++
        }
    }

    onCountClick = () => {
        // this.setState({count: this.state.count + 1})
        console.log(this.state.count);
    };

    onSelectCard = (id) => {
        this.setState(({cardsData}) => {
            const indexOfCard = cardsData.findIndex((el) => el.id === id);

            // 1. update object
            const oldItem = cardsData[indexOfCard];
            const newItem = {...oldItem, selected: true};

            // 2. construct new array
            const newArray = [
                ...cardsData.slice(0, indexOfCard),
                newItem,
                ...cardsData.slice(indexOfCard + 1),
            ];

            return {
                cardsData: newArray
            };
        });
        console.log('select', id);
    };

    render() {
        const selectedElems = this.state.cardsData.filter((el) => el.selected).length;
        return (
            <Router>
                <div className='main-wrapper'>
                    <Header/>
                    <main className='main'>
                        <h2>{selectedElems}</h2>
                        <Route path="/" component={GameDescription} exact/>
                        <Route
                            path="/game"
                            render={(props) => <Game
                                cards={this.state.cardsData}
                                onCountClick={this.onCountClick}
                                onSelectCard={this.onSelectCard}
                            />}
                        />
                        <Route path="/settings" component={Settings}/>
                        <Route path="/statistic" component={Statistic}/>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
