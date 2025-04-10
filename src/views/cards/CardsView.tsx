import React, { FunctionComponent, useMemo } from 'react';

import Buttons from '../../components/buttons/NavigationButtons';
import FlashCard from '../../components/flash-card/FlashCard';
import useSpreadsheetData from '../../hooks/SpreadsheetData';

import './CardsView.css';

const CardsView: FunctionComponent = () => {
  const [curIndex, setCurIndex] = React.useState(0);
  const items = useSpreadsheetData();

  const itemsLength = useMemo(() => {
    return items.length;
  }, [items]);

  return (
    <>
      <span className="counter-container">{`${curIndex + 1} / ${itemsLength}`}</span>
      {!!items.length && (
        <div>
          <FlashCard sideA={items[curIndex].word} sideB={items[curIndex].translation} />
          <Buttons
            itemsLength={items.length}
            curIndex={curIndex}
            setCurIndex={setCurIndex}
          />
        </div>
      )}
    </>
  );
};

export default CardsView;
