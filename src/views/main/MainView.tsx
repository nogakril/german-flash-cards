import { FunctionComponent, useState } from 'react';

import CustomDropdownButton from '../../components/buttons/CustomDropdownButton';
import { ViewType } from '../../data/declerations';
import CardsView from '../cards/CardsView';

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
    </>
  );
};

export default MainView;
