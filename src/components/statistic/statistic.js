import React, {Component} from 'react';

import './statistic.scss';

export default class Statistic extends Component {

    orderPlace = 1;

    render() {

        const {statisticData} = this.props;

        localStorage.setItem('myStatistic', JSON.stringify(statisticData));

        const statisticItems = statisticData.map((item) => {
            const {score, currentDate, currentTime} = item;
            return (
                <tr key={++this.orderPlace}>
                    <td>{this.orderPlace}</td>
                    <td>{score}</td>
                    <td>{currentDate}</td>
                    <td>{currentTime}</td>
                </tr>
            );
        });

        return (
            <section className="statistic">
                <h2 className="statistic__title">Statistic</h2>
                <p className="statistic__desc">The best ten attempts will be added to your statistic :)</p>
                <table className="statistic__table">
                    <thead>
                    <tr>
                        <th>Place</th>
                        <th>Score</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {statisticItems}
                    </tbody>
                </table>
            </section>
        );
    }
}