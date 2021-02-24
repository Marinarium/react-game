import React, {Component} from 'react';

import './header.scss';

import {Link} from 'react-router-dom'

export default class Header extends Component {

    state = {
        menu: ''
    };

    menuItems = [
        {name: 'Home', linkTo: '/'},
        {name: 'Start Game', linkTo: '/game'},
        {name: 'Settings', linkTo: '/settings'},
        {name: 'Statistic', linkTo: '/statistic'}
    ];

    showMenu = () => {
        document.getElementById('body').classList.toggle('overflow-hidden');
        this.state.menu === '' ? this.setState({menu: 'active'}) : this.setState({menu: ''});
    };

    render() {
        const menuItems = this.menuItems.map(({name, linkTo}) => {
            return (
                <li className="menu__item" key={`${name}-li`}>
                    <Link
                        to={linkTo}
                        className="menu__link"
                        key={name}
                        onClick={this.showMenu}>
                        {name}
                    </Link>
                </li>
            );
        });

        return (
            <header className='header'>
                <h1 className='logo'><Link to="/" className="logo__link">MemoryGame</Link></h1>
                <nav className='menu'>
                    <div className={`burger ${this.state.menu}`}
                         id="burger"
                         onClick={this.showMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`menu__list ${this.state.menu}`}>
                        {menuItems}
                    </ul>
                </nav>
            </header>
        );
    }
}
