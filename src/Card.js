import React from 'react';
import './Card.css';

const  HIDDEN_SYMBOL = '?';

const card = ( { card, feedback, onClick } ) => (
    <div className={ `card ${feedback}` } onClick={ () => onClick( card ) }>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card }
        </span>
    </div>
);

export default card;