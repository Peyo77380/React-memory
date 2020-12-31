import React from 'react';
import './HallOfFame.css';

const HallOfFame = ( { entries } ) => (
    <table className="hallOfFame">
        <thead>
            <tr>
                <td className="date">Date</td>
                <td className="guesses">Guesses</td>
                <td className="player">Champ</td>
            </tr>
        </thead>
        <tbody>

            { entries.map( ({ id, date, guesses, player }) =>
                <tr key={ id }>

                    <td className="date">{ date }</td>
                    <td className="guesses">{ guesses }</td>
                    <td className="player">{ player }</td>

                </tr>
                )}


        </tbody>
    </table>
);

export default HallOfFame;

