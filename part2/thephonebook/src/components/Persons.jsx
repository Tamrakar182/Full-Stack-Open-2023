import peopleService from '../services/peoples'

const Persons = ({ personList, setPeopleList }) => {
  const idList = personList.map(person => person.id)

  const deleteConfirm = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      peopleService
      .deletePeople(person.id)
      .then(
        () => {
          const updatedPersonList = personList.filter(p => p.id !== person.id);
          setPeopleList(updatedPersonList);
        })
      .catch(error => console.log(error));
    }
  }

  return (
    <ul>
      {personList
        .map((person) => (
          <li key={person.id}>
            {person.name}: {person.number}
            <button onClick={() => deleteConfirm(person)}>delete</button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
