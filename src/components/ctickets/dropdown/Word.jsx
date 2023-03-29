import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
function Word({ word }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="word">

    <div className="info">
        <img src={word.cover} alt={word.name} className="image" />
        <span className="name">{word.name}</span>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className="font-icon" onClick={handleClick} />

      {showDescription && <div className="description">{word.description}</div>}
    </div>
  );
}

export default Word;

