import Banner from '../Banner';
import RestartButton from '../RestartButton';

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <RestartButton handleRestart={handleRestart} />
    </Banner>
  );
}

export default WonBanner;
