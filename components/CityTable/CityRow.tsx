import React from 'react';
import { City } from '../../types/City';

interface Props {
  city: City;
}

const CityRow: React.FC<Props> = ({ city }) => {
  const handleClick = () => {
    // Handle click to navigate to weather page
  }

  const handleRightClick = () => {
    // Handle right click to open in new tab
  }

  return (
    <tr onClick={handleClick} onContextMenu={handleRightClick}>
      <td>{city.name}</td>
      <td>{city.country}</td>
      <td>{city.timezone}</td>
      {/* Add more columns as needed */}
    </tr>
  );
}

export default CityRow;
