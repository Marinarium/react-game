import React, {Component} from 'react';

import './header.scss';

import {Link} from 'react-router-dom'

export default class Header extends Component {

    state = {
        menu: false
    };

    menuItems = [
        {name: 'Game', linkTo: '/'},
        {name: 'Settings', linkTo: '/settings'},
        {name: 'Statistic', linkTo: '/statistic'}
    ];

    showMenu = () => {
        document.body.classList.toggle('overflow-hidden');
        this.setState((state) => {
            return {
                menu: !state.menu
            };
        });
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

        const {menu} = this.state;

        let classBurger = 'burger';
        let classMenuList = 'menu__list'
        if (menu) {
            classBurger += ' active';
            classMenuList += ' active'
        }

        return (
            <header className='header'>
                {/*<h1 className='logo'><Link to="/" className="logo__link">MemoryGame</Link></h1>*/}
                <h1 className='logo logo__link'>MemoryGame</h1>
                <nav className='menu'>
                    <div className={classBurger}
                         id="burger"
                         onClick={this.showMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={classMenuList}>
                        {menuItems}
                    </ul>
                </nav>
            </header>
        );
    }
}
