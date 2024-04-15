import React from 'react';
import CityTable from './components/CityTable/CityTable';
import WeatherPage from './components/WeatherPage/WeatherPage';

const App: React.FC = () => {
  return (
    <div>
      <CityTable />
      <WeatherPage />
    </div>
  );
}

export default App;
