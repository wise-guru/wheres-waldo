import { useRef } from 'react';

function DropdownField(props) {
  const { name, image, clicked, compareValues, character, id } = props;

  const buttonRef = useRef(null);

  // Field for each dropdown menu character

  return (
    <button
      type="button"
      key={name}
      //   href="#menuitem"
      className={`dropdownCharacterBtn ${character}Btn`}
      ref={buttonRef}
      onClick={(e) => {
        compareValues(e, character);
      }}
      //   role="menuitem"
    >
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
