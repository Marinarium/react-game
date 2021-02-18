import React, {Component} from 'react';

import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
