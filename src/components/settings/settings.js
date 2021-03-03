import React, {Component} from 'react';

import './settings.scss';


export default class Settings extends Component {
    musicControls = [
        {name: 'on', label: 'play'},
        {name: 'off', label: 'pause'}
    ]

    soundControls = [
        {name: 'on', label: 'on'},
        {name: 'off', label: 'off'}
    ]

    render() {
        const {music, onMusicChange, sounds, onSoundsChange} = this.props;

        const musicControls = this.musicControls.map(({name, label}) => {

            const isActive = music === name;
            const clazz = isActive ? 'active' : ''

            return (
                <button type='button'
                        className={`settings__option ${clazz}`}
                        key={name}
                        onClick={() => onMusicChange(name)}>
                    {label}</button>
            );
        });

        const soundControls = this.soundControls.map(({name, label}) => {

            const isActive = sounds === name;
            const clazz = isActive ? 'active' : ''

            return (
                <button type='button'
                        className={`settings__option ${clazz}`}
                        key={name}
                        onClick={() => onSoundsChange(name)}>
                    {label}</button>
            );
        });

        return (
            <section className="settings">
                <h2 className="settings__title">Settings</h2>
                <div className="settings__info">
                    <div className="settings__box">
                        <h3 className="settings__subtitle">Music:</h3>
                        <div className="settings__options">
                            {musicControls}
                        </div>
                    </div>
                    <div className="settings__box">
                        <h3 className="settings__subtitle">Sounds:</h3>
                        <div className="settings__options">
                            {soundControls}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}