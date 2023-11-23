import Button from '../Button';

function RestartButton({ handleRestart }) {
  return (
    <Button className="restart" onClick={handleRestart}>
      Play again
    </Button>
  );
}

export default RestartButton;
