import React, {Component} from 'react';

import './statistic.scss';

export default class Statistic extends Component {
    render() {
        return (
            <section className="statistic">
                <h2 className="statistic__title">Statistic</h2>
                <table className="statistic__table">
                    <tr>
                        <th>Game</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>237</td>
                        <td>2:45</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>345676</td>
                        <td>2:45</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>237</td>
                        <td>2:45</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>345676</td>
                        <td>2:45</td>
                    </tr>
                </table>
            </section>
        );
    }
}