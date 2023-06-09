import peopleService from '../services/peoples'

const Persons = ({ personList, setPeopleList, setMessage }) => {
 
  const deleteConfirm = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      peopleService
      .deletePeople(person.id)
      .then(
        () => {
          const updatedPersonList = personList.filter(p => p.id !== person.id);
          setPeopleList(updatedPersonList);
        })
      .catch(error => {
        setMessage({ type: 'error', content: `"${person.name}" was already removed from the server.` })
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPeopleList(personList.filter(n => n.id !== person.id))
      });
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
