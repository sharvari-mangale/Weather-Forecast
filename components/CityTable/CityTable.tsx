import React, { useState, useEffect } from 'react';
import CityRow from './CityRow';
import { getCities } from '../../services/ApiService';
import { City } from '../../types/City';
import { filterCities } from '../../utils/helpers';

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchCities = async () => {
      const data = await getCities();
      setCities(data);
    };
    fetchCities();
  }, []);

  const filteredCities = filterCities(cities, searchTerm);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search city..." />
      <table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Timezone</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredCities.map(city => (
            <CityRow key={city.id} city={city} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CityTable;
