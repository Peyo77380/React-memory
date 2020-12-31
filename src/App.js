import shuffle from 'lodash.shuffle';
import { Component } from 'react';
import './App.css';
import Card from './Card';
import GuessCount from './GuessCount';
import HallOfFame from './HallOfFame';

const SIDE = 6;
const SYMBOLS = "😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿";


class App extends Component {

  cards = this.generateCardDeck ();

  generateCardDeck () {
    const result = [];

    const deckSize = SIDE * SIDE;

    const candidates = shuffle( SYMBOLS );

    while ( result.length < deckSize ) {
      let card = candidates.pop();
      
      result.push( card, card);
    }

    return shuffle( result );
  }
  
  handleCardClick ( card ) {
    console.log( card, 'clicked' );
  }


  render() {
    const won = new Date().getSeconds() % 2 === 0;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory</h1>
        </header>
        <main className="memory">
          <GuessCount guesses={0} />

          <div className="memory cardContainer">

            { this.cards.map ( ( card, index ) => (
                <Card card={ card } key={ index } feedback="visible" onClick={ this.handleCardClick } />
              ) ) }
            
          </div>

          {won && <p>Gagné !</p>}

          <HallOfFame entries={[
            {id: '1', date: '30/12/2020', guesses: '100', player: 'zblurg'}, 
            {id: '2', date: '31/12/2020', guesses: '200', player: 'zblorg'},
            {id: '3', date: '31/12/2020', guesses: '210', player: 'zblirg'},
            ]}/>
        </main>
      </div>
      
    );
  }
}

export default App;
