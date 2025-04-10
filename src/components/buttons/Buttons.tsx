import React, { useCallback } from 'react';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './Buttons.css';

interface ButtonsProps {
  itemsLength: number;
  curIndex: number;
  setCurIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Buttons: React.FC<ButtonsProps> = ({ itemsLength, curIndex, setCurIndex }) => {
  const onClickLeft = useCallback(() => {
    if (curIndex > 0) {
      setCurIndex(curIndex - 1);
    }
  }, [curIndex, setCurIndex]);

  const onClickRight = useCallback(() => {
    if (curIndex < itemsLength - 1) {
      setCurIndex(curIndex + 1);
    }
  }, [curIndex, itemsLength, setCurIndex]);

  return (
    <div className="buttons-container">
      <button onClick={onClickLeft} disabled={curIndex === 0}>
        <FaArrowLeft />
      </button>
      <button onClick={onClickRight} disabled={curIndex === itemsLength - 1}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Buttons;
