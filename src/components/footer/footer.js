import React, {Component} from 'react';

import './footer.scss';
import git from './images/git.svg';
import youtube from './images/youtube.svg';
import rss from './images/rss-logo.svg';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <section className="socials">
                    <a href="https://github.com/Marinarium" className="socials__link">
                        <img src={git} alt="github" className="socials__img"/>
                    </a>
                    <a href="https://youtu.be/T3cVwtnJIwI" className="socials__link">
                        <img src={youtube} alt="youtube" className="socials__img"/>
                    </a>
                </section>
                <a href="https://rs.school/" className="rss-logo">
                    <img src={rss} alt="rsschool" className="rss-logo__img"/>
                </a>
                <div className="year">2021</div>
            </footer>
        );
    }
}