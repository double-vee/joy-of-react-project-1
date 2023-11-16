import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={guess ? `cell ${result[num].status}` : 'cell'}
        >
          {guess ? guess[num] : null}
        </span>
      ))}
    </p>
  );
}

export default Guess;
