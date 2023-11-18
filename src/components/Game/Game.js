import { useState } from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner/';
import LostBanner from '../LostBanner/';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameResult, setGameResult] = useState('pending');

  function addGuess(input) {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      setGuesses((prev) => [...prev, input]);
    }
  }

  if (guesses.length === NUM_OF_GUESSES_ALLOWED && gameResult === 'pending') {
    setGameResult('lost');
  }

  if (guesses.includes(answer) && gameResult === 'pending') {
    setGameResult('won');
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameResult === 'lost'} />
      {gameResult === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameResult === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
