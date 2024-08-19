import React, { useEffect, useState } from 'react';

//const Api_Key = '0d3e796d69ba07808eb910ce40f9fb9c';
const Api_Key = '74443c4207d644c2f8b3fb1ca8dd1cb3'

const FlightFlights_App = () => {
    const [flights, setFlights] = useState([]);
    const [groupedByDate, setGroupedByDate] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedFlight, setSelectedFlight] = useState(null);

    useEffect(() => {
        fetch(`https://api.aviationstack.com/v1/flights?access_key=${Api_Key}`)
            .then(response => response.json())
            .then(data => {
                const flightsData = data.data;
                setFlights(flightsData);
                groupByDate(flightsData);
            });
    }, []);

    const groupByDate = (flights) => {
        const grouped = flights.reduce((acc, flight) => {
            const date = flight.flight_date;
            if (!acc[date]) acc[date] = [];
            acc[date].push(flight);
            return acc;
        }, {});
        setGroupedByDate(grouped);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setSelectedOrigin(null);
        setSelectedDestination(null);
        setSelectedFlight(null);
    };

    const handleOriginClick = (iata) => {
        setSelectedOrigin(iata);
        setSelectedDestination(null);
        setSelectedFlight(null);
    };

    const handleDestinationClick = (iata) => {
        setSelectedDestination(iata);
        setSelectedFlight(null);
    };

    const handleFlightClick = (flight) => {
        setSelectedFlight(flight);
    };

    const getUniqueOrigins = (flights) => {
        const origins = flights.map(flight => flight.departure.iata);
        return [...new Set(origins)];
    };

    const getUniqueDestinations = (flights) => {
        const destinations = flights.map(flight => flight.arrival.iata);
        return [...new Set(destinations)];
    };

    return (
        <div>
            <div className="my-4 text-3xl font-bold text-green-600 ml-10">
                <h1>Fechas con vuelos</h1>
            </div>

            <div>
                {Object.keys(groupedByDate).map(date => (
                    <button key={date} 
                        onClick={() => handleDateClick(date)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 shadow-lg transition-transform transform hover:scale-105"
                    >
                        {date}
                    </button>
                ))}
            </div>

            {selectedDate && (
                <div>
                    <div className="my-4 text-3xl font-bold text-green-800 ml-10">
                        <h2>Origenes con fecha: {selectedDate}</h2>
                    </div>
                    <div className="flex flex-wrap">
                        {getUniqueOrigins(groupedByDate[selectedDate]).map(iata => (
                            <button 
                                key={iata} 
                                onClick={() => handleOriginClick(iata)}
                                className="bg-cyan-400 hover:bg-cyan-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg m-2 shadow-md transition-transform transform hover:scale-105"
                            >
                                {iata}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {selectedOrigin && (
                <div>
                    <div className="my-4 text-3xl font-bold text-green-800 ml-10">
                        <h2>Destinos desde: {selectedOrigin}</h2>
                    </div>
                    <div className="flex flex-wrap">
                        {getUniqueDestinations(groupedByDate[selectedDate].filter(flight => flight.departure.iata === selectedOrigin)).map(iata => (
                            <button 
                                key={iata} 
                                onClick={() => handleDestinationClick(iata)}
                                className="bg-cyan-400 hover:bg-cyan-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg m-2 shadow-md transition-transform transform hover:scale-105"
                            >
                                {iata}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {selectedDestination && (
                <div>
                    <div className="my-4 text-3xl font-bold text-green-800 ml-10">
                        <h2>Vuelos desde {selectedOrigin} a {selectedDestination}</h2>
                    </div>
                    <div className="flex flex-wrap">
                        {groupedByDate[selectedDate].filter(flight => flight.departure.iata === selectedOrigin && flight.arrival.iata === selectedDestination).map(flight => (
                            <button 
                                key={flight.flight.number} 
                                onClick={() => handleFlightClick(flight)}
                                className="bg-cyan-400 hover:bg-cyan-600 text-white font-medium text-sm py-1.5 px-3 rounded-lg m-2 shadow-md transition-transform transform hover:scale-105"
                            >
                                Vuelo {flight.flight.number}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {selectedFlight && (
                <div className="my-4 ml-10 text-xl text-gray-800">
                    <h3 className='text-2xl font-bold text-sky-800'>Información del vuelo</h3>
                    <p><strong>Aerolínea:</strong> {selectedFlight.airline.name}</p>
                    <p><strong>Aeropuerto Origen:</strong> {selectedFlight.departure.airport}</p>
                    <p><strong>Aeropuerto Destino:</strong> {selectedFlight.arrival.airport}</p>
                    <p><strong>Salida programada:</strong> {selectedFlight.departure.scheduled}</p>
                    <p><strong>Llegada programada:</strong> {selectedFlight.arrival.scheduled}</p>
                </div>
            )}
        </div>
    );
};

export default FlightFlights_App;
