import React, { FunctionComponent, useCallback } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import { ViewType } from '../../data/declerations';

export interface IProps {
  selectedView: ViewType;
  setSelectedView: (viewType: ViewType) => void;
}

const CustomDropdownButton: FunctionComponent<IProps> = ({
  selectedView,
  setSelectedView,
}) => {
  return (
    <Dropdown onSelect={(key) => setSelectedView((key as ViewType) || selectedView)}>
      <Dropdown.Toggle variant="info">{selectedView}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="cards">cards</Dropdown.Item>
        <Dropdown.Item eventKey="type">type</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdownButton;
