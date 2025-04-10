import React from 'react';
import { useState } from 'react';

import { VocabEntity } from '../../data/declerations';

import './FlashCard.css';

interface IProps {
  entity: VocabEntity;
}

const FlashCard: React.FC<IProps> = ({ entity }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flash-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-content">
        {flipped ? <p>{entity.word}</p> : <p>{entity.translation}</p>}
      </div>
    </div>
  );
};

export default FlashCard;
