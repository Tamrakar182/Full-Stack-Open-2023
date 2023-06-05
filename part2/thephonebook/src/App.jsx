import { useState } from 'react'
import Heading from './components/Heading'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [personList, setPersonList] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const setPeopleList = (PeopleToShow) => {
    setPersonList(PeopleToShow)
  }

  return (
    <div>
      <Heading name="Phonebook" />
      <Filter personList={personList} handleFilteredPersons={setPeopleList}/>

      <Heading name="Add New" />
      <PersonForm personList={personList} setPeopleList={setPeopleList} />

      <Heading name="Numbers" />
      <Persons personList={personList} /> 
    </div>
  )
}

export default App