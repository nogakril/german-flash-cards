import React, { FunctionComponent, RefObject } from 'react';

import classNames from 'classnames';
import { useForm } from 'react-hook-form';

import { VocabConjugation, VocabEntity } from '../../data/declerations';

import './Forms.css';

type VerbInput = {
  presentConj: VocabConjugation;
  pastConj: string;
};

interface IProps {
  entity: VocabEntity;
  handleAnswerRef: RefObject<(() => void) | null>;
  handleCheckRef: RefObject<(() => void) | null>;
}

const VerbForm: FunctionComponent<IProps> = ({
  entity,
  handleCheckRef,
  handleAnswerRef,
}) => {
  const { register, handleSubmit, setValue } = useForm<VerbInput>();
  const [correctPast, setCorrectPast] = React.useState<boolean | undefined>(undefined);
  const [correctPresent, setCorrectPresent] = React.useState<{
    [key in keyof VocabConjugation]?: boolean;
  }>({});
  const onSubmit = handleSubmit((data) => {
    setCorrectPast(data.pastConj === entity.conjugation?.past);
    setCorrectPresent({
      ich: data.presentConj.ich === entity.conjugation?.present.ich,
      du: data.presentConj.du === entity.conjugation?.present.du,
      es: data.presentConj.es === entity.conjugation?.present.es,
      wir: data.presentConj.wir === entity.conjugation?.present.wir,
      ihr: data.presentConj.ihr === entity.conjugation?.present.ihr,
      sie: data.presentConj.sie === entity.conjugation?.present.sie,
    });
  });

  const handleAnswer = () => {
    setValue('pastConj', entity.conjugation?.past || '');
    setValue('presentConj.ich', entity.conjugation?.present.ich || '');
    setValue('presentConj.du', entity.conjugation?.present.du || '');
    setValue('presentConj.es', entity.conjugation?.present.es || '');
    setValue('presentConj.wir', entity.conjugation?.present.wir || '');
    setValue('presentConj.ihr', entity.conjugation?.present.ihr || '');
    setValue('presentConj.sie', entity.conjugation?.present.sie || '');
  };

  handleCheckRef.current = onSubmit;
  handleAnswerRef.current = handleAnswer;

  return (
    <form className="type-card" onSubmit={onSubmit}>
      <label className="title">{`Definition: ${entity.translation}`}</label>
      {Object.entries(entity.conjugation?.present || {}).map(([key, value]) => {
        return (
          <span className={'row-container'} key={key}>
            <label className="subtitle">{key}</label>
            <input
              className={classNames('input', {
                correct: correctPresent[key as keyof VocabConjugation] === true,
                incorrect: correctPresent[key as keyof VocabConjugation] === false,
              })}
              {...register(('presentConj.' + key) as keyof VerbInput)}
              placeholder="Write the German"
            />
          </span>
        );
      })}
      <span className={'row-container'}>
        <label className="subtitle">{'perfect'}</label>
        <input
          className={classNames('input', {
            correct: correctPast === true,
            incorrect: correctPast === false,
          })}
          {...register('pastConj')}
          placeholder="Write the German"
        />
      </span>
    </form>
  );
};

export default VerbForm;
