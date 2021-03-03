import React, {Component} from 'react';

import Header from "../header/header";
import Footer from "../footer/footer";
import GameDescription from "../game-description/game-description";
import Game from "../game/game";
import Settings from "../settings/settings";
import Statistic from "../statistic/statistic";
import Hotkeys from "../hotkeys/hotkeys";

import './app.scss';

import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
    someId = 100;

    animalsCardsData = [
        this.createCardItem('beaver', 'images/animals/beaver.png'),
        this.createCardItem('beaver', 'images/animals/beaver.png'),
        this.createCardItem('crocodile', 'images/animals/crocodile.png'),
        this.createCardItem('crocodile', 'images/animals/crocodile.png'),
        this.createCardItem('elephant', 'images/animals/elephant.png'),
        this.createCardItem('elephant', 'images/animals/elephant.png'),
        this.createCardItem('fox', 'images/animals/fox.png'),
        this.createCardItem('fox', 'images/animals/fox.png'),
        this.createCardItem('giraffe', 'images/animals/giraffe.png'),
        this.createCardItem('giraffe', 'images/animals/giraffe.png'),
        this.createCardItem('goat', 'images/animals/goat.png'),
        this.createCardItem('goat', 'images/animals/goat.png'),
        this.createCardItem('penguin', 'images/animals/penguin.png'),
        this.createCardItem('penguin', 'images/animals/penguin.png'),
        this.createCardItem('hippo', 'images/animals/hippo.png'),
        this.createCardItem('hippo', 'images/animals/hippo.png'),
        this.createCardItem('lion', 'images/animals/lion.png'),
        this.createCardItem('lion', 'images/animals/lion.png'),
        this.createCardItem('meerkat', 'images/animals/meerkat.png'),
        this.createCardItem('meerkat', 'images/animals/meerkat.png'),
        this.createCardItem('owl', 'images/animals/owl.png'),
        this.createCardItem('owl', 'images/animals/owl.png'),
        this.createCardItem('panda', 'images/animals/panda.png'),
        this.createCardItem('panda', 'images/animals/panda.png')
    ];
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
    ];
    localStatisticData = (localStorage.getItem('myStatistic')) ? JSON.parse(localStorage.getItem('myStatistic')) : [];

    musicBackground = new Audio('audio/get-lucky.mp3');
    soundPew = new Audio('audio/pew.mp3');
    soundMagic = new Audio('audio/magic-wand.mp3');
    soundDoorBell = new Audio('audio/doorbell.mp3');

    state = {
        topic: 'animals',
        level: 'easy',
        color: 'blue',
        colorCode: '#9DD6FA',
        cardsData: this.animalsCardsData.sort(this.sortByField('name')).slice(0, 12).sort(() => 0.5 - Math.random()),
        statisticData: this.localStatisticData.sort(this.sortByFieldFromBiggest('score')).slice(0, 10),
        music: 'off',
        sounds: 'on',
        count: 0,
        gameState: {
            score: 0
        }
    }

    handlers = {
        homePage: event => console.log('press key!!!')
    };

    onTopicChange = (topic) => {
        this.setState({topic});
        this.setState(({cardsData}) => {
            if (topic === 'plants' && this.state.level === 'pro') {
                return {
                    cardsData: this.plantsCardsData.sort(() => 0.5 - Math.random())
                };
            } else if (topic === 'animals' && this.state.level === 'pro') {
                return {
                    cardsData: this.animalsCardsData.sort(() => 0.5 - Math.random())
                };
            } else if (topic === 'plants' && this.state.level === 'easy') {
                return {
                    cardsData: this.plantsCardsData.sort(this.sortByField('name')).slice(0, 12).sort(() => 0.5 - Math.random())
                };
            } else {
                return {
                    cardsData: this.animalsCardsData.sort(this.sortByField('name')).slice(0, 12).sort(() => 0.5 - Math.random())
                };
            }
        });
        this.zeroOutCount();
    };

    onLevelChange = (level) => {
        this.setState({level});
        this.setState(({cardsData}) => {
            if (level === 'easy' && this.state.topic === 'animals') {
                return {
                    cardsData: this.animalsCardsData.sort(this.sortByField('name')).slice(0, 12).sort(() => 0.5 - Math.random())
                };
            } else if (level === 'pro' && this.state.topic === 'animals') {
                return {
                    cardsData: this.animalsCardsData.sort(() => 0.5 - Math.random())
                };
            } else if (level === 'easy' && this.state.topic === 'plants') {
                return {
                    cardsData: this.plantsCardsData.sort(this.sortByField('name')).slice(0, 12).sort(() => 0.5 - Math.random())
                };
            } else {
                return {
                    cardsData: this.plantsCardsData.sort(() => 0.5 - Math.random())
                };
            }
        });
        this.zeroOutCount();
    };

    onColorChange = (color, colorCode) => {
        this.setState({color});
        this.setState({colorCode});
    };

    onMusicChange = (music) => {
        this.setState({music});
        if (music === 'on') {
            // this.musicBackground.pause();
            this.musicBackground.loop = true;
            this.musicBackground.play();
        } else {
            this.musicBackground.pause();
        }
    }

    onSoundsChange = (sounds) => {
        this.setState({sounds});
    }

    onSoundClick() {
        if (this.state.sounds === 'on') {
            this.soundPew.play();
        }
    };

    onSoundClickNewGame() {
        if (this.state.sounds === 'on') {
            this.soundMagic.play();
        }
    };

    onSoundClickFinishGame() {
        if (this.state.sounds === 'on') {
            this.soundDoorBell.play();
        }
    };



    onFinishGame = () => {
        this.setState(({cardsData}) => {
            return {
                cardsData: []
            };
        });
        this.setState({gameState: {...this.state.gameState, score: 0}});
        this.onSoundClickFinishGame();
        this.zeroOutCount();
    };

    onNewGame = () => {
        this.setState((state) => {
            return {count: 0}
        });
        this.setState(({cardsData}) => {
            if (this.state.topic === 'plants' && this.state.level === 'pro') {
                return {
                    cardsData: this.plantsCardsData.sort(() => 0.5 - Math.random())
                };
            } else if (this.state.topic === 'animals' && this.state.level === 'pro') {
                return {
                    cardsData: this.animalsCardsData.sort(() => 0.5 - Math.random())
                };
            } else if (this.state.topic === 'plants' && this.state.level === 'easy') {
                return {
                    cardsData: this.plantsCardsData.sort(this.sortByField('name')).slice(0, 12).sort(() => 0.5 - Math.random())
                };
            } else {
                return {
                    cardsData: this.animalsCardsData.sort(this.sortByField('name')).slice(0, 12).sort(() => 0.5 - Math.random())
                };
            }
        });
        this.setState({gameState: {...this.state.gameState, score: 0}});
        this.onSoundClickNewGame();
    };

    addStatisticItem = (newScore) => {
        if (newScore > 0) {
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();
            const newStatisticItem = {
                score: newScore,
                currentDate: currentDate,
                currentTime: currentTime
            }

            this.setState(({statisticData}) => {
                const newStatsArr = [
                    ...statisticData,
                    newStatisticItem
                ];

                newStatsArr.sort(this.sortByFieldFromBiggest('score')).slice(0, 10);

                return {
                    statisticData: newStatsArr
                };
            });
        }
    };

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

    sortByField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    sortByFieldFromBiggest(field) {
        return (a, b) => a[field] < b[field] ? 1 : -1;
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

    onSelectCard = (id, name, firstGuess) => {
        if (this.state.count < 2) {
            if (this.state.count === 0) {
                this.incrementCount();
                this.onSoundClick();
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
                this.onSoundClick();
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
                                   level={this.state.level}
                                   topic={this.state.topic}
                                   color={this.state.color}
                                   onTopicChange={this.onTopicChange}
                                   onLevelChange={this.onLevelChange}
                                   onColorChange={this.onColorChange}
                                   onNewGame={this.onNewGame}
                                   gameState={this.state.gameState}
                                   addStatisticItem={this.addStatisticItem}
                               />}
                        />
                        <Route
                            path="/game"
                            render={(props) => <Game
                                color={this.state.colorCode}
                                gameState={this.state.gameState}
                                cards={this.state.cardsData}
                                onSelectCard={this.onSelectCard}
                                onFinishGame={this.onFinishGame}
                                onNewGame={this.onNewGame}
                                addStatisticItem={this.addStatisticItem}
                            />}
                        />
                        <Route path="/settings"
                               render={(props) => <Settings
                                   music={this.state.music}
                                   sounds={this.state.sounds}
                                   onMusicChange={this.onMusicChange}
                                   onSoundsChange={this.onSoundsChange}
                               />}
                        />
                        <Route path="/statistic"
                               render={(props) => <Statistic
                                   gameState={this.state.gameState}
                                   statisticData={this.state.statisticData}
                               />}
                        />
                        <Route path="/hotkeys" component={Hotkeys}/>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
