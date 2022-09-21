import { useEffect, useRef, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { collection, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import Bubblegum from '../Assets/bubblegum.jpg';
import MagicMan from '../Assets/magicMan.webp';
import BMO from '../Assets/BMO.webp';
import Stopwatch from './Stopwatch';
import Waldo from '../Assets/waldo.png';
import DropdownMenu from './DropdownMenu';
import GameEnd from './GameEnd';
import GameStartModal from './GameStartModal';

const firebaseConfig = {
  apiKey: 'AIzaSyDadW3LddR34ECni2LIu9Q66xKTX8yDuMg',
  authDomain: 'wheres-waldo-1fef3.firebaseapp.com',
  databaseURL: 'https://wheres-waldo-1fef3-default-rtdb.firebaseio.com',
  projectId: 'wheres-waldo-1fef3',
  storageBucket: 'wheres-waldo-1fef3.appspot.com',
  messagingSenderId: '1023566557445',
  appId: '1:1023566557445:web:019f90573bec77ad14c76c'
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function Game(props) {
  const { time, setTime, timerOn, setTimerOn } = props;
  const [counter, setCounter] = useState(0);
  const [startGameModal, setStartGameModal] = useState(true);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [endGameModal, setEndGameModal] = useState(false);
  const waldoRef = useRef(null);
  const gameboard = useRef(null);
  const dropdownMenuRef = useRef(null);
  const BMOStatus = useRef(null);
  const magicManStatus = useRef(null);
  const bubblegumStatus = useRef(null);

  const toggleDropdownMenu = () => {
    setDropdownMenu((current) => !current);
  };

  const disableButton = (character) => {
    if (counter <= 2) {
      const btn = document.querySelector(`.${character}Btn`);
      btn.style.pointerEvents = 'none';
      btn.disabled = true;
    }
  };

  const placeCharacters = (event) => {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const storedCoords = doc(db, 'coordinates', 'click');
    updateDoc(storedCoords, {
      current: [x, y]
    }).then(() => {});

    setTimeout(() => {
      if (dropdownMenuRef) {
        dropdownMenuRef.current.style.opacity = '100%';
        dropdownMenuRef.current.style.left = `${x}px`;
        dropdownMenuRef.current.style.top = `${y}px`;
      }
      toggleDropdownMenu();
    }, 200);
  };

  const compareValues = (e, character) => {
    const storedCoords = collection(db, 'coordinates');
    const characterPositions = [];

    getDocs(storedCoords).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        characterPositions.push({ ...document.data(), id: document.id });
      });
      if (character === 'bubblegum') {
        if (
          characterPositions[1].current[1] >=
            characterPositions[0][character][1] - characterPositions[0][character][1] * 0.2 &&
          characterPositions[1].current[1] <=
            characterPositions[0][character][1] + characterPositions[0][character][1] * 0.35 &&
          characterPositions[1].current[0] >=
            characterPositions[0][character][0] - characterPositions[0][character][0] * 0.2 &&
          characterPositions[1].current[0] <=
            characterPositions[0][character][0] + characterPositions[0][character][0] * 0.2
        ) {
          bubblegumStatus.current.style.opacity = '30%';
          const newcount = counter + 1;
          setCounter(newcount);
          disableButton(character);
        }
      }
      if (character === 'magicMan') {
        if (
          characterPositions[1].current[1] >=
            characterPositions[0][character][1] - characterPositions[0][character][1] * 0.2 &&
          characterPositions[1].current[1] <=
            characterPositions[0][character][1] + characterPositions[0][character][1] * 0.2 &&
          characterPositions[1].current[0] >=
            characterPositions[0][character][0] - characterPositions[0][character][0] * 0.2 &&
          characterPositions[1].current[0] <=
            characterPositions[0][character][0] + characterPositions[0][character][0] * 0.2
        ) {
          magicManStatus.current.style.opacity = '30%';
          const newcount = counter + 1;
          setCounter(newcount);
          disableButton(character);
        }
      }

      if (character === 'bmo') {
        if (
          characterPositions[1].current[1] >=
            characterPositions[0][character][1] - characterPositions[0][character][1] * 0.02 &&
          characterPositions[1].current[1] <=
            characterPositions[0][character][1] + characterPositions[0][character][1] * 0.08 &&
          characterPositions[1].current[0] >=
            characterPositions[0][character][0] - characterPositions[0][character][0] * 0.02 &&
          characterPositions[1].current[0] <=
            characterPositions[0][character][0] + characterPositions[0][character][0] * 0.02
        ) {
          BMOStatus.current.style.opacity = '30%';
          const newcount = counter + 1;
          setCounter(newcount);
          disableButton(character);
        }
      }
    });

    // if (score.includes('bubblegum') && score.includes('magicMan') && score.includes('bmo')
    if (counter >= 2) {
      setTimerOn(false);
      setDropdownMenu(false);
      setEndGameModal(true);
      waldoRef.current.style.width = '100%';
      gameboard.current.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const initialselect = waldoRef.current;
      const boundstwo = initialselect.getBoundingClientRect();
      // These needed to change
      const storedWidthX = boundstwo.width;
      const storedWidthY = boundstwo.height;

      const BMOX = storedWidthX * 0.44;
      const BMOY = storedWidthY * 0.377;

      const magicManX = storedWidthX * 0.26;
      const magicManY = storedWidthY * 0.49;

      // These can stay the same. Above needs to change.
      const bubblegumX = storedWidthX * 0.905;
      const bubblegumY = storedWidthX * 0.22;

      const storedCoords = doc(db, 'coordinates', 'N98ZypsxrlZBpNGnhQxs');
      updateDoc(storedCoords, {
        bubblegum: [bubblegumX, bubblegumY],
        bmo: [BMOX, BMOY],
        magicMan: [magicManX, magicManY]
      }).then(() => {});
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="mini-container">
          <div className="header">
            <div className="statusContainer">
              <img
                src={Bubblegum}
                className="image-hold-two"
                ref={bubblegumStatus}
                alt="Princess Bubblegum"
              />
              <img src={BMO} className="image-hold-two" ref={BMOStatus} alt="BMO" />
              <img src={MagicMan} className="image-hold-two" ref={magicManStatus} alt="Magic Man" />
            </div>
            <Stopwatch
              className="stopwatch"
              time={time}
              setTime={setTime}
              timerOn={timerOn}
              setTimerOn={setTimerOn}
            />
          </div>
          <div className="gameboard" ref={gameboard}>
            <img
              src={Waldo}
              onClick={(e) => {
                placeCharacters(e);
              }}
              className="waldoImage"
              ref={waldoRef}
              alt="Adventure time cast"
            />

            <div ref={dropdownMenuRef} className="image-holder">
              {dropdownMenu ? <DropdownMenu compareValues={compareValues} /> : <div />}
            </div>
            {startGameModal ? (
              <GameStartModal setTimerOn={setTimerOn} setStartGameModal={setStartGameModal} />
            ) : (
              <div />
            )}
            {endGameModal ? <GameEnd time={time} /> : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
