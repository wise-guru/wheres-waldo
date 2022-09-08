import { Route, Routes } from 'react-router-dom';
import Gameboard from './GameBoard';
import GameEnd from './GameEnd';
import StartingScreen from './StartingScreen';

function Main(props) {
  const { time, setTime, timerOn, setTimerOn } = props;
  return (
    <Routes>
      <Route path="/" element={<StartingScreen setTimerOn={setTimerOn} />} />
      <Route path="/game" element={<Gameboard />} />
      <Route path="results" element={<GameEnd />} />
    </Routes>
  );
}

export default Main;
