import { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter your guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        required
      ></input>
    </form>
  );
}

export default GuessInput;
