import { useEffect, useState } from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="App">
      <Game time={time} setTime={setTime} timerOn={timerOn} setTimerOn={setTimerOn} />
    </div>
  );
}

export default App;
