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

    animalsCardsData = [
        this.createCardItem('beaver', 'images/animals/beaver.png'),
        this.createCardItem('crocodile', 'images/animals/crocodile.png'),
        this.createCardItem('elephant', 'images/animals/elephant.png'),
        this.createCardItem('fox', 'images/animals/fox.png'),
        this.createCardItem('giraffe', 'images/animals/giraffe.png'),
        this.createCardItem('goat', 'images/animals/goat.png'),
        this.createCardItem('penguin', 'images/animals/penguin.png'),
        this.createCardItem('hippo', 'images/animals/hippo.png'),
        this.createCardItem('lion', 'images/animals/lion.png'),
        this.createCardItem('meerkat', 'images/animals/meerkat.png'),
        this.createCardItem('owl', 'images/animals/owl.png'),
        this.createCardItem('panda', 'images/animals/panda.png'),
        this.createCardItem('beaver', 'images/animals/beaver.png'),
        this.createCardItem('crocodile', 'images/animals/crocodile.png'),
        this.createCardItem('elephant', 'images/animals/elephant.png'),
        this.createCardItem('fox', 'images/animals/fox.png'),
        this.createCardItem('giraffe', 'images/animals/giraffe.png'),
        this.createCardItem('goat', 'images/animals/goat.png'),
        this.createCardItem('penguin', 'images/animals/penguin.png'),
        this.createCardItem('hippo', 'images/animals/hippo.png'),
        this.createCardItem('lion', 'images/animals/lion.png'),
        this.createCardItem('meerkat', 'images/animals/meerkat.png'),
        this.createCardItem('owl', 'images/animals/owl.png'),
        this.createCardItem('panda', 'images/animals/panda.png'),
    ].sort(() => 0.5 - Math.random());
    plantsCardsData = [
        this.createCardItem('beach', 'images/plants/beach.png'),
        this.createCardItem('beach', 'images/plants/beach.png'),
        this.createCardItem('berries', 'images/plants/berries.png'),
        this.createCardItem('berries', 'images/plants/berries.png'),
        this.createCardItem('cactus', 'images/plants/cactus.png'),
        this.createCardItem('cactus', 'images/plants/cactus.png'),
        this.createCardItem('fern', 'images/plants/fern.png'),
        this.createCardItem('fern', 'images/plants/fern.png'),
        this.createCardItem('forest', 'images/plants/forest.png'),
        this.createCardItem('forest', 'images/plants/forest.png'),
        this.createCardItem('money', 'images/plants/money.png'),
        this.createCardItem('money', 'images/plants/money.png'),
        this.createCardItem('mushroom', 'images/plants/mushroom.png'),
        this.createCardItem('mushroom', 'images/plants/mushroom.png'),
        this.createCardItem('plant', 'images/plants/plant.png'),
        this.createCardItem('plant', 'images/plants/plant.png'),
        this.createCardItem('roses', 'images/plants/roses.png'),
        this.createCardItem('roses', 'images/plants/roses.png'),
        this.createCardItem('science', 'images/plants/science.png'),
        this.createCardItem('science', 'images/plants/science.png'),
        this.createCardItem('spruce', 'images/plants/spruce.png'),
        this.createCardItem('spruce', 'images/plants/spruce.png'),
        this.createCardItem('sunflower', 'images/plants/sunflower.png'),
        this.createCardItem('sunflower', 'images/plants/sunflower.png')
    ].sort(() => 0.5 - Math.random());

    state = {
        topic: 'animals', //plants
        level: 3,
        colorTheme: 'blue',
        cardsData: this.animalsCardsData,
        count: 0,
        gameState: {
            score: 0
        }
    }


    onTopicChange = (topic) => {
        this.setState({topic});
        this.setState(({cardsData}) => {
            if (topic === 'plants') {
                return {
                    cardsData: this.plantsCardsData
                };
            } else {
                return {
                    cardsData: this.animalsCardsData
                };
            }
        });
        this.zeroOutCount();
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
        setTimeout(() =>
            this.setState((state) => {
                return {count: 0}
            }), 1300);
    }

    onCountClick = () => {
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
                        <Route path="/" exact
                               render={(props) => <GameDescription
                                   topic={this.state.topic}
                                   onTopicChange={this.onTopicChange}
                               />}
                        />
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
