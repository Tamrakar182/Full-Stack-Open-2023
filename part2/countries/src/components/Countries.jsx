const Countries = ({ countryList }) => {
  if (countryList.length > 10) {
    return <p>Too Many Countries, specify a filter</p>;
  } else {
    return (
      <ul>
        {countryList.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    );
  }
};

export default Countries;
