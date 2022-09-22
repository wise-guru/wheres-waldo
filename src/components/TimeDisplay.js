function TimeDisplay(props) {
  const { time } = props;
  return (
    <h3 id="display">
      <span>{`0${Math.floor((time / 60000) % 60)}`.slice(-2)}:</span>
      <span>{`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:</span>
      <span>{`0${(time / 10) % 100}`.slice(-2)}</span>
    </h3>
  );
}

export default TimeDisplay;
