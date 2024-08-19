import React, { useEffect, useState } from 'react'

const Api_Key = '0d3e796d69ba07808eb910ce40f9fb9c'

const FlightAirports_App = () => {
    const [airports, setAirports] = useState([]);
    const [countries, setCountry] = useState({});
    const [selectedAirport, setSelectedAirport] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);


    useEffect(() => {
        fetch(`https://api.aviationstack.com/v1/airports?access_key=${Api_Key}`)
          .then(response => response.json())
          .then(data => {
            const airportData = data.data;
            setAirports(airportData);
            groupByCountry(airportData);
          });
      }, []);

      const groupByCountry = (airports) => {
        const grouped = airports.reduce((acc, airport) => {
          const country = airport.country_name;
          if (!acc[country]) acc[country] = [];
          acc[country].push(airport);
          return acc;
        }, {});
        setCountry(grouped);
      };

      const handleCountryClick = (country) => {
        setSelectedCountry(country);
        setSelectedAirport(null);
      };

      const handleAirportClick = (airport) => {
        setSelectedAirport(airport);
      };
      

      return (
        <div>
          
          <div className="my-4 text-3xl font-bold text-green-600 ml-10">
                <h1>Paises con Aeropuertos</h1>
            </div>
          <p></p>
    
            <div>
              {Object.keys(countries).map(country => (
                <button key={country} 
                onClick={() => handleCountryClick(country)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 shadow-lg transition-transform transform hover:scale-105"
                >
                  {country}
                </button>
              ))}
            </div>
            {selectedCountry && (
              <div>
              <div className="my-4 text-3xl font-bold text-green-800 ml-10">
                <h2>Aeropuertos en : {selectedCountry}</h2>
                </div>
                <div className="flex flex-wrap">
                {countries[selectedCountry].map(airport => (
                    <button 
                    key={airport.iata_code} 
                    onClick={() => handleAirportClick(airport)}
                    className="bg-cyan-400 hover:bg-cyan-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg m-2 shadow-md transition-transform transform hover:scale-105"
                    >
                    {airport.airport_name}
                    </button>
                ))}
                </div>
              </div>
            )}
            {selectedAirport && (
              <div>
                <h3 className='my-4 ml-10 text-3xl font-bold text-sky-800'> Aeropuerto: {selectedAirport.airport_name}</h3>
                <p><strong>Codigo IATA:</strong> {selectedAirport.iata_code}</p>
                <p><strong>Zona Horaria GMT:</strong> {selectedAirport.gmt ? selectedAirport.gmt : 'N/A'}</p>
            </div>
            )}
          </div>
          );

};
export default FlightAirports_App;