import { useState, useEffect } from 'react'
import peopleService from './services/peoples'
import Heading from './components/Heading'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [personList, setPersonList] = useState([])

  useEffect(()=>{
    peopleService
      .getAll()
      .then(initialPeople => setPeopleList(initialPeople))
  }, [])

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
      <Persons personList={personList} setPeopleList={setPeopleList} /> 
    </div>
  )
}

export default App