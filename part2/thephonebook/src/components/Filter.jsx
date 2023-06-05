import { useState } from "react";

const Filter = ({ personList, handleFilteredPersons }) => {
  const [searchName, setSearchName] = useState("");

  const handleSearchNameChange = (event) => {
    const newSearchName = event.target.value;
    setSearchName(newSearchName);
    const PeopleToShow = personList.filter((contact) =>
      contact.name.toLowerCase().includes(newSearchName.toLowerCase())
    );
    handleFilteredPersons(PeopleToShow);
  };

  return (
    <div>
      <label>Filter by name: </label>
      <input type="text" value={searchName} onChange={handleSearchNameChange} />
    </div>
  );
};

export default Filter;
