import { useState, useEffect } from 'react'
import axios from "axios"
import Heading from './components/Heading'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [personList, setPersonList] = useState([])

  useEffect(()=>{
    axios
      .get(' http://localhost:3001/persons')
      .then(res => setPeopleList(res))
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
      <Persons personList={personList} /> 
    </div>
  )
}

export default App