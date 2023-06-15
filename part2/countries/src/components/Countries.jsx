import React, { useEffect, useState } from 'react';
import CountryDetails from './CountryDetails';

const Countries = ({ countryList }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const showCountry = (country) => {
        setSelectedCountry((prev) => country);
    };

    useEffect(() => {
        console.log(selectedCountry);
    }, [selectedCountry]);

    if (countryList.length > 10) {
        return <p>Too Many Countries, specify a filter</p>;
    }

    return (
        <>
            {countryList.length < 10 && countryList.length !== 1 && (
                <ul>
                    {countryList.map((country) => (
                        <React.Fragment key={country}>
                            <li>{country}</li>
                            <button onClick={() => showCountry(country)}>Show</button>
                        </React.Fragment>
                    ))}
                </ul>
            )}
            {countryList.length === 1 || selectedCountry ? (
                <CountryDetails country={selectedCountry || countryList[0]} />
            ) : (
                <></>
            )}
        </>
    );
};

export default Countries;
