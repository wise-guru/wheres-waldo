import { useEffect, useState } from 'react';

function Header(props) {
  const { time, setTime, timerOn, setTimerOn } = props;
  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
        <span>{`0${Math.floor((time / 60000) % 60)}`.slice(-2)}:</span>
        <span>{`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:</span>
        <span>{`0${(time / 10) % 100}`.slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button type="button" onClick={() => setTimerOn(true)}>
            Start
          </button>
        )}
        {timerOn && (
          <button type="button" onClick={() => setTimerOn(false)}>
            Stop
          </button>
        )}
        {!timerOn && time > 0 && (
          <button type="button" onClick={() => setTime(0)}>
            Reset
          </button>
        )}
        {!timerOn && time > 0 && (
          <button type="button" onClick={() => setTimerOn(true)}>
            Resume
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
