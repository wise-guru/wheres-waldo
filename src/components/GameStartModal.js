function GameStartModal(props) {
  const { setTimerOn, setStartGameModal } = props;
  return (
    <div className="bgModal">
      <div className="modalContent">
        <h1>Where&apos;s Waldo: Adventure Time Edition</h1>
        <div>Find Princess Bubblegum, BMO, and Magic Man as fast as you can!</div>
        <div>
          <button
            type="button"
            onClick={() => {
              setStartGameModal(false);
              setTimerOn(true);
            }}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameStartModal;
