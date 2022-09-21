import { useRef } from 'react';

function DropdownField(props) {
  const { name, image, compareValues, character } = props;

  const buttonRef = useRef(null);

  return (
    <button
      type="button"
      key={name}
      //   href="#menuitem"
      className={`dropdownCharacterBtn ${character}Btn`}
      ref={buttonRef}
      onClick={(e) => {
        compareValues(e, character);
      }}>
      <div className="dropdownCharacter">
        <div className="dropdownCharacterImage">
          <img src={image} alt={name} />
        </div>

        <div>{name}</div>
      </div>
    </button>
  );
}

export default DropdownField;
