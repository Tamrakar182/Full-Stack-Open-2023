import Countries from './components/Countries';
import Title from './components/Title';
import countryService from './services/country';
import { useState, useEffect } from 'react';

const App = () => {
    const [searchText, setSearchText] = useState('');
    const [countries, setCountries] = useState([]);
    const [searchedCountries, setSearchedCountries] = useState([]);

    useEffect(() => {
        const filteredCountries = countries.filter((name) => {
            const regx = new RegExp(searchText, 'i');
            return regx.test(name);
        });

        console.log(filteredCountries);

        setSearchedCountries(filteredCountries);
    }, [searchText, countries]);

    useEffect(() => {
        countryService.getAll().then((countryList) => {
            const countryNames = countryList.map((country) => country.name.common);
            setCountries(countryNames);
        });
    }, []);

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
        console.log(searchText);
    };

    return (
        <>
            <Title textData="Find Countries" />
            <form>
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={searchText}
                    onChange={handleSearchTextChange}
                />
            </form>

            <Countries countryList={searchedCountries} />
        </>
    );
};

export default App;
