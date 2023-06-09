import { useState } from "react";
import peopleService from "../services/peoples";

const PersonForm = ({ personList, setPeopleList, setMessage }) => {
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
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace old number with a new one?`
        )
      ) {
        const id = existingPerson.id;

        const nameObject = {
          name: newName,
          number: newNumber,
        };

        peopleService
          .update(nameObject, id)
          .then((returnedPeople) => {
            setPeopleList(
              personList.map((person) =>
                person.id !== id ? person : returnedPeople
              )
            );
            setMessage({
              type: "success",
              content: `Successfully modified "${returnedPeople.name}".`,
            });
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setMessage({
              type: "error",
              content: `${error.response.data.error}`,
            });
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
    };

    peopleService
      .create(nameObject)
      .then((returnedPeople) => {
        setPeopleList(personList.concat(nameObject));
        setMessage({
          type: "success",
          content: `Successfully added "${returnedPeople.name}".`,
        });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        // console.log(error.response.data.error)
        setMessage({ type: "error", content: `${error.response.data.error}` });
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
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
