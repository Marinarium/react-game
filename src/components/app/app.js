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
            // this.createCardItem('bobomb', 'images/bobomb.png'),
            // this.createCardItem('mario', 'images/mario.png'),
            // this.createCardItem('luigi', 'images/luigi.png'),
            // this.createCardItem('peach', 'images/peach.png'),
            // this.createCardItem('1up', 'images/1up.png'),
            // this.createCardItem('mushroom', 'images/mushroom.png'),
            // this.createCardItem('thwomp', 'images/thwomp.png'),
            // this.createCardItem('bulletbill', 'images/bulletbill.png'),
            // this.createCardItem('coin', 'images/coin.png'),
            // this.createCardItem('goomba', 'images/goomba.png'),
            this.createCardItem('shell', 'images/blueshell.png'),
            this.createCardItem('star', 'images/star.png')
            // this.createCardItem('bobomb', 'images/bobomb.png'),
            // this.createCardItem('mario', 'images/mario.png'),
            // this.createCardItem('luigi', 'images/luigi.png'),
            // this.createCardItem('peach', 'images/peach.png'),
            // this.createCardItem('1up', 'images/1up.png'),
            // this.createCardItem('mushroom', 'images/mushroom.png'),
            // this.createCardItem('thwomp', 'images/thwomp.png'),
            // this.createCardItem('bulletbill', 'images/bulletbill.png'),
            // this.createCardItem('coin', 'images/coin.png'),
            // this.createCardItem('goomba', 'images/goomba.png')
        ].sort(() => 0.5 - Math.random()),
        count: 0,
        gameState: {
            score: 0,
            time: "00:00",

        }
    }

    createCardItem(name, img) {
        return {
            name: name,
            img: img,
            selected: false,
            firstGuess: false,
            secondGuess: false,
            match: false,
            id: this.someId++
        }
    }

    changeProperty(arr, id, propName, newProp) {
        const indexOfCard = arr.findIndex((el) => el.id === id);

        const oldItem = arr[indexOfCard];
        const newItem = {...oldItem, [propName]: newProp};

        return [
            ...arr.slice(0, indexOfCard),
            newItem,
            ...arr.slice(indexOfCard + 1),
        ];
    }

    incrementCount() {
        this.setState((state) => {
            return {count: state.count + 1}
        });
    }

    zeroOutCount() {
        setTimeout( () =>
        this.setState((state) => {
            return {count: 0}
        }), 1300);
    }

    onCountClick = (id) => {
        // this.setState((state) => {
        //     return {count: state.count + 1}
        // });
    };

    onSelectCard = (id, name, firstGuess) => {
        if (this.state.count < 2) {
            if (this.state.count === 0) {
                this.incrementCount();
                this.setState(({cardsData}) => {
                    return {
                        cardsData: this.changeProperty(cardsData, id, 'selected', true)
                    };
                });
                this.setState(({cardsData}) => {
                    return {
                        cardsData: this.changeProperty(cardsData, id, 'firstGuess', name)
                    };
                });
            }
            if (this.state.count === 1 && !firstGuess) {
                this.incrementCount();
                this.setState(({cardsData}) => {
                    return {
                        cardsData: this.changeProperty(cardsData, id, 'selected', true)
                    };
                });
                setTimeout(() =>
                    this.setState(({cardsData}) => {
                        return {
                            cardsData: this.changeProperty(cardsData, id, 'secondGuess', name)
                        };
                    }), 1200);
                this.zeroOutCount();
            }
        }
    };

    render() {

        return (
            <Router>
                <div className='main-wrapper'>
                    <Header/>
                    <main className='main'>
                        <Route path="/" component={GameDescription} exact/>
                        <Route
                            path="/game"
                            render={(props) => <Game
                                gameState={this.state.gameState}
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
