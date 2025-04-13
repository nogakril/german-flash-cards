import React, { FunctionComponent, RefObject } from 'react';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { VocabEntity } from '../../data/declerations';

import './NounForm.css';

type NounInput = {
  singular: string;
  plural: string;
};

interface IProps {
  entity: VocabEntity;
  handleAnswerRef: RefObject<(() => void) | null>;
  handleCheckRef: RefObject<(() => void) | null>;
}

const NounForm: FunctionComponent<IProps> = ({ entity, handleCheckRef }) => {
  const { register, handleSubmit } = useForm<NounInput>();
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

  handleCheckRef.current = onSubmit;

  return (
    <form className="type-card" onSubmit={onSubmit}>
      <label className="title">Definition</label>
      <span>{entity.translation}</span>

      <label className="subtitle">Singular</label>
      <input
        className={classNames('input', {
          correct: correctSingular === true,
          incorrect: correctSingular === false,
        })}
        defaultValue="test"
        {...register('singular')}
        placeholder="Write the German"
      />

      <label className="subtitle">Plural</label>
      <input
        className={classNames('input', {
          correct: correctPlural === true,
          incorrect: correctPlural === false,
        })}
        {...register('plural')}
        placeholder="Write the German"
      />
    </form>
  );
};

export default NounForm;
