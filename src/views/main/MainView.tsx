import { FunctionComponent, useState } from 'react';

import CustomDropdownButton from '../../components/buttons/CustomDropdownButton';
import { ViewType } from '../../data/declerations';
import CardsView from '../cards/CardsView';
import TypeView from '../type/TypeView';

const MainView: FunctionComponent = () => {
  const [selectedView, setSelectedView] = useState<ViewType>('cards');
  return (
    <>
      <div className="d-flex justify-content-left">
        <CustomDropdownButton
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </div>

      {selectedView === 'cards' && <CardsView />}

      {selectedView === 'type' && <TypeView />}
    </>
  );
};

export default MainView;
