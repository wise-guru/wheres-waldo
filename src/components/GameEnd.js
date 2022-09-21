import { Link } from 'react-router-dom';
import TimeDisplay from './TimeDisplay';

function GameEnd(props) {
  const { time } = props;
  return (
    <div className="bgModal">
      <div className="modalContent">
        <h1>You win!</h1>
        <h2>
          Time: <TimeDisplay time={time} />
        </h2>
        <div>
          <button type="button" onClick={() => window.location.reload()}>
            Play again
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameEnd;
