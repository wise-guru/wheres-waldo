function TimeDisplay(props) {
  const { time } = props;
  return (
    <h2 id="display">
      <span>{`0${Math.floor((time / 60000) % 60)}`.slice(-2)}:</span>
      <span>{`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:</span>
      <span>{`0${(time / 10) % 100}`.slice(-2)}</span>
    </h2>
  );
}

export default TimeDisplay;
