import { useState } from "react";

const PersonForm = ({ personList, setPeopleList }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (newName.trim() === "") {
      return;
    }
    const existingPerson = personList.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (existingPerson) {
      window.alert(`${newName} is already added to the phonebook.`);
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: personList.length + 1,
    };

    const updatedPersonList = [...personList, nameObject];

    setPeopleList(updatedPersonList);
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />{" "}
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />{" "}
      </div>
      <div>
        <button type="submit">add</button>{" "}
      </div>
    </form>
  );
};

export default PersonForm;
