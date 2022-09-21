import PB from '../Assets/bubblegum.jpg';
import MagicMan from '../Assets/magicMan.webp';
import BMO from '../Assets/BMO.webp';
import DropdownField from './DropdownFields';

function DropdownMenu({
  characters = [
    { name: 'Princess Bubblegum', character: 'bubblegum', image: PB, id: 1 },
    { name: 'Magic Man', character: 'magicMan', image: MagicMan, id: 2 },
    { name: 'BMO', character: 'bmo', image: BMO, id: 3 }
  ],
  compareValues
}) {
  return (
    <div className="dropdownMenu" style={{ backgroundColor: 'white', color: 'red' }}>
      <div className="targets">
        {characters.map((character) => {
          return (
            <DropdownField
              image={character.image}
              name={character.name}
              key={character.name}
              compareValues={compareValues}
              character={character.character}
              id={character.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DropdownMenu;
