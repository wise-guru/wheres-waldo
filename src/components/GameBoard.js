import { useState } from 'react';
import Waldo from '../Assets/waldo.png';
import DropdownMenu from './DropdownMenu';

function Gameboard() {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const toggleDropdownMenu = () => {
    setDropdownMenu((current) => !current);
  };

  const getCursorPosition = (canvas, event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`x: ${x} y: ${y}`);
  };

  const canvas = document.querySelector('body');
  canvas.addEventListener('mousedown', function (e) {
    getCursorPosition(canvas, e);
  });

  //   const cursor = document.querySelector('#cursor');
  //   const gameboard = document.querySelector('.gameboard');
  //   gameboard.addEventListener('mouseover', function (e) {
  //     const x = e.clientX;
  //     const y = e.clientY;
  //     cursor.style.left = `${x}px`;
  //     cursor.style.top = `${y}px`;
  //   });

  return (
    <div className="gameboard">
      <div id="cursor" />

      {dropdownMenu ? <DropdownMenu /> : <div />}
      <div className="imageBox" onClick={(toggleDropdownMenu, getCursorPosition)}>
        <img src={Waldo} alt="Adventure Time Vast" />
      </div>
    </div>
  );
}

export default Gameboard;
