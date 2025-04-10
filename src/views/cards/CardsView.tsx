import React, { FunctionComponent } from 'react';

import Buttons from '../../components/buttons/Buttons';
import FlashCard from '../../components/flash-card/FlashCard';
import useSpreadsheetData from '../../hooks/SpreadsheetData';

const CardsView: FunctionComponent = () => {
  const [curIndex, setCurIndex] = React.useState(0);
  const items = useSpreadsheetData();

  return (
    <>
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
