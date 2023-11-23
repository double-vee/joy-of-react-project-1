import { useState } from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner/';
import LostBanner from '../LostBanner/';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  console.info({ answer });

  const [guesses, setGuesses] = useState([]);
  const [gameResult, setGameResult] = useState('pending');

  function handleRestart() {
    const nextAnswer = sample(WORDS);
    setAnswer((prev) => (nextAnswer === prev ? sample(WORDS) : nextAnswer));

    setGuesses([]);
    setGameResult('pending');
  }

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
      {gameResult === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameResult === 'lost' && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
