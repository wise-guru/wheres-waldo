import TimeDisplay from './TimeDisplay';

function Stopwatch(props) {
  const { time } = props;
  return (
    <div className="Timers">
      <TimeDisplay time={time} />
    </div>
  );
}

export default Stopwatch;
