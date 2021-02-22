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
    render() {
        return (
            <Router>
                <div className='main-wrapper'>
                    <Header/>
                    <main className='main'>
                        <Route path="/" component={GameDescription} exact/>
                        <Route path="/game" component={Game}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/statistic" component={Statistic}/>
                    </main>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
