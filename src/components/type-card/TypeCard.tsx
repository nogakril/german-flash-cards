import React, { useRef, useState } from 'react';

import { useUpdateEffect } from '@custom-react-hooks/use-update-effect';

import { VocabEntity } from '../../data/declerations';
import NounForm from '../forms/NounForm';
import VerbForm from '../forms/VerbForm';

import './TypeCard.css';

interface IProps {
  entity: VocabEntity;
}

const TypeCard: React.FC<IProps> = ({ entity }) => {
  const [revealed, setRevealed] = useState(false);
  const answerRef = useRef<() => void>(null);
  const checkRef = useRef<() => void>(null);

  const handleAnswer = () => {
    answerRef.current?.();
    setRevealed(true);
  };

  const handleCheck = () => {
    checkRef.current?.();
  };

  useUpdateEffect(() => {
    setRevealed(false);
  }, [entity]);

  return (
    <div className="type-card-container">
      {entity.type === 'Noun' && (
        <NounForm entity={entity} handleAnswerRef={answerRef} handleCheckRef={checkRef} />
      )}
      {entity.type === 'Verb' && (
        <VerbForm entity={entity} handleAnswerRef={answerRef} handleCheckRef={checkRef} />
      )}
      {!revealed && (
        <div className="button-container">
          <button onClick={handleAnswer}>Answer</button>
          <button onClick={handleCheck}>Check</button>
        </div>
      )}
    </div>
  );
};

export default TypeCard;
