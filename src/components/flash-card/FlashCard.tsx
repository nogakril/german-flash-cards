import React from 'react';
import { useState } from 'react';

import './FlashCard.css';

interface FlashCardProps {
  sideA: string;
  sideB: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ sideA, sideB }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flash-card ${flipped ? 'flipped' : sideB}`} onClick={handleClick}>
      <div className="card-content">{flipped ? <p>{sideA}</p> : <p>{sideB}</p>}</div>
    </div>
  );
};

export default FlashCard;
