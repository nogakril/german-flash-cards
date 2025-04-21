import React, { FunctionComponent, RefObject, useEffect } from 'react';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { VocabEntity } from '../../data/declerations';

import './Forms.css';

type AdjInput = {
  adjective: string;
};

interface IProps {
  entity: VocabEntity;
  handleAnswerRef: RefObject<(() => void) | null>;
  handleCheckRef: RefObject<(() => void) | null>;
}

const AdjForm: FunctionComponent<IProps> = ({
  entity,
  handleCheckRef,
  handleAnswerRef,
}) => {
  const { register, handleSubmit, setValue, reset } = useForm<AdjInput>();
  const [correctAdj, setCorrectAdj] = React.useState<boolean | undefined>(undefined);

  const onSubmit = handleSubmit((data) => {
    setCorrectAdj(data.adjective.toLocaleLowerCase() === entity.word.toLocaleLowerCase());
  });

  const handleAnswer = () => {
    setValue('adjective', entity.word);
  };

  handleCheckRef.current = onSubmit;
  handleAnswerRef.current = handleAnswer;

  useEffect(() => {
    reset();
  }, [entity]);

  return (
    <form className="type-card" onSubmit={onSubmit}>
      <label className="title">{`Definition: ${entity.translation}`}</label>

      <span className="row-container">
        <label className="subtitle">Adjective</label>
        <input
          className={classNames('input', {
            correct: correctAdj === true,
            incorrect: correctAdj === false,
          })}
          {...register('adjective')}
          placeholder="Write the German"
        />
      </span>
    </form>
  );
};

export default AdjForm;
