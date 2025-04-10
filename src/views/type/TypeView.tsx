import React, { FunctionComponent, useMemo } from 'react';

import Buttons from '../../components/buttons/NavigationButtons';
import TypeCard from '../../components/type-card/TypeCard';
import useSpreadsheetData from '../../hooks/SpreadsheetData';

import './TypeView.css';

const TypeView: FunctionComponent = () => {
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
          <TypeCard entity={items[curIndex]} />
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

export default TypeView;
