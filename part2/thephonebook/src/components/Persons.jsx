const Persons = ({ personList }) => {
  return (
    <ul>
      {personList.map((person) => (
        <li key={person.id}>
          {person.name}: {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;