import Banner from '../Banner';
import RestartButton from '../RestartButton';

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton handleRestart={handleRestart} />
    </Banner>
  );
}

export default LostBanner;
