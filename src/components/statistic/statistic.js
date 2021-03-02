import React, {Component} from 'react';

import './statistic.scss';

export default class Statistic extends Component {

    render() {

        const {statisticData} = this.props;

        const statisticItems = statisticData.map((item) => {
            const {id, score, currentDate, currentTime} = item;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{score}</td>
                    <td>{currentDate}</td>
                    <td>{currentTime}</td>
                </tr>
            );
        });

        return (
            <section className="statistic">
                <h2 className="statistic__title">Statistic</h2>
                <p className="statistic__desc">All your attempts will be added to your statistic :)</p>
                <table className="statistic__table">
                    <tr>
                        <th>Game</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    {statisticItems}
                </table>
            </section>
        );
    }
}