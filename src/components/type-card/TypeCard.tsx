import React, { useCallback, useState } from 'react';

import { useUpdateEffect } from '@custom-react-hooks/use-update-effect';
import classNames from 'classnames';

import { VocabEntity } from '../../data/declerations';

import './TypeCard.css';

interface IProps {
  entity: VocabEntity;
}

type AnswerNoun = {
  singular: string;
  plural: string;
  correctSingular: boolean;
  correctPlural: boolean;
};

const TypeCard: React.FC<IProps> = ({ entity }) => {
  const [revealed, setRevealed] = useState(false);
  const [answerNoun, setAnswerNoun] = useState<AnswerNoun>({
    singular: '',
    plural: '',
    correctSingular: false,
    correctPlural: false,
  });
  const handleCheck = useCallback(() => {
    if (entity.type === 'Noun') {
      setAnswerNoun((prev) => ({
        ...prev,
        correctSingular: entity.word === prev.singular,
        correctPlural: entity.plural === prev.plural,
      }));
    }
    setRevealed(true);
  }, []);

  const handleAnswer = useCallback(() => {
    setAnswerNoun(() => ({
      singular: entity.word,
      plural: entity.plural,
      correctSingular: false,
      correctPlural: false,
    }));
    setRevealed(true);
  }, []);

  useUpdateEffect(() => {
    setRevealed(false);
  }, [entity]);

  return (
    <div className="type-card">
      <span className="title">Definition</span>
      <div className="definition">{entity.translation}</div>
      <span className="title">Your Answer</span>
      {entity.type === 'Noun' && (
        <>
          <span className="subtitle">Singular Form with Article</span>
          <input
            className={classNames('input', {
              correct: revealed && answerNoun.correctSingular,
              incorrect: revealed && !answerNoun.correctSingular,
            })}
            placeholder="Type the German"
            value={answerNoun.singular}
            onChange={(e) =>
              setAnswerNoun((prev) => ({
                ...prev,
                singular: e.target.value,
              }))
            }
          />
          <span className="subtitle">Plural Form with Article</span>
          <input
            className={classNames('input', {
              correct: revealed && answerNoun.correctPlural,
              incorrect: revealed && !answerNoun.correctPlural,
            })}
            placeholder="Type in German"
            value={answerNoun.plural}
            onChange={(e) =>
              setAnswerNoun((prev) => ({
                ...prev,
                plural: e.target.value,
              }))
            }
          />
        </>
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
