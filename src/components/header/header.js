import React, {Component} from 'react';

import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <h1 className='logo'>MemoryGame</h1>
                <nav className='menu'>
                    <div className="burger" id="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="menu__list">
                        <li className="menu__item"><a href="#" className="menu__link">Memory Game</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">Settings</a></li>
                        <li className="menu__item"><a href="#" className="menu__link">Statistic</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
