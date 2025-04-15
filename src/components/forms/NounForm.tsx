import React, { FunctionComponent, RefObject } from 'react';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { VocabEntity } from '../../data/declerations';

import './Forms.css';

type NounInput = {
  singular: string;
  plural: string;
};

interface IProps {
  entity: VocabEntity;
  handleAnswerRef: RefObject<(() => void) | null>;
  handleCheckRef: RefObject<(() => void) | null>;
}

const NounForm: FunctionComponent<IProps> = ({
  entity,
  handleCheckRef,
  handleAnswerRef,
}) => {
  const { register, handleSubmit, setValue } = useForm<NounInput>();
  const [correctSingular, setCorrectSingular] = React.useState<boolean | undefined>(
    undefined
  );
  const [correctPlural, setCorrectPlural] = React.useState<boolean | undefined>(
    undefined
  );

  const onSubmit = handleSubmit((data) => {
    setCorrectSingular(data.singular === entity.word);
    setCorrectPlural(data.plural === entity.plural);
  });

  const handleAnswer = () => {
    setValue('singular', entity.word);
    setValue('plural', entity.plural || '');
  };

  handleCheckRef.current = onSubmit;
  handleAnswerRef.current = handleAnswer;

  return (
    <form className="type-card" onSubmit={onSubmit}>
      <label className="title">{`Definition: ${entity.translation}`}</label>

      <span className="row-container">
        <label className="subtitle">Singular</label>
        <input
          className={classNames('input', {
            correct: correctSingular === true,
            incorrect: correctSingular === false,
          })}
          {...register('singular')}
          placeholder="Write the German"
        />
      </span>

      <span className="row-container">
        <label className="subtitle">Plural</label>
        <input
          className={classNames('input', {
            correct: correctPlural === true,
            incorrect: correctPlural === false,
          })}
          {...register('plural')}
          placeholder="Write the German"
        />
      </span>
    </form>
  );
};

export default NounForm;
