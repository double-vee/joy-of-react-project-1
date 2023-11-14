import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {guess ? guess[num] : null}
        </span>
      ))}
    </p>
  );
}

export default Guess;
