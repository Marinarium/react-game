import React, {Component} from 'react';

import './hotkeys.scss';


export default class Hotkeys extends Component {
    hotKeys = [
        {label: 'Home', key:'alt+h'},
        {label: 'Settings', key:'alt+s'},
        {label: 'Statistic', key:'alt+t'},
        {label: 'Hotkeys', key:'alt+k'},
        {label: 'GitHub', key:'alt+g'}
    ]

    render() {
        const hotKeys = this.hotKeys.map(({label, key}) => {
            return (
                <div className="hotkeys__row" key={label}>
                    <h3 className="hotkeys__subtitle">{label}</h3>
                    <span className="hotkeys__desc">{key}</span>
                </div>
            );
        });

        return (
            <section className="hotkeys">
                <h2 className="hotkeys__title">Hotkeys</h2>
                <div className="hotkeys__info">
                    {hotKeys}
                </div>
            </section>
        );
    }
}