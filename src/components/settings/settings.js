import React, {Component} from 'react';

import './settings.scss';


export default class Settings extends Component {
    render() {
        return (
            <section className="settings">
                <h2 className="settings__title">Settings</h2>
                <div className="settings__info">
                    <div className="settings__box">
                        <h3 className="settings__subtitle">Music</h3>
                        <div className="settings__option"><span className="music-on active">On</span> / <span className="music-off">Off</span></div>
                    </div>
                    <div className="settings__box">
                        <h3 className="settings__subtitle">Sounds</h3>
                        <div className="settings__option"><span className="sound-on active">On</span> / <span className="sound-off">Off</span></div>
                    </div>
                </div>
            </section>
        );
    }
}