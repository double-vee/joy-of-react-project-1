function Banner({ gameResult, numOfGuesses, answer }) {
  const className =
    gameResult === 'won'
      ? 'happy banner'
      : gameResult === 'lost'
      ? 'sad banner'
      : 'banner';

  return (
    <div className={className}>
      {gameResult === 'won' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      )}

      {gameResult === 'lost' && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
