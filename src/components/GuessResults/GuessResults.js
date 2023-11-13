function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => {
        return (
          <p key={i} className="guess">
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
