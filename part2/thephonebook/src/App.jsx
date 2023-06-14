import { useState, useEffect } from 'react'
import peopleService from './services/peoples'
import Notification from './components/Notification'
import Heading from './components/Heading'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [personList, setPersonList] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(()=>{
    peopleService
      .getAll()
      .then(initialPeople => setPersonList(initialPeople))
  }, [])

  const setPeopleList = (PeopleToShow) => {
    setPersonList(PeopleToShow)
  }

  return (
    <div>
      <Heading name="Phonebook" />

      <Notification message={message} />

      <Filter personList={personList} handleFilteredPersons={setPeopleList}/>

      <Heading name="Add New" />
      <PersonForm personList={personList} setPeopleList={setPeopleList} setMessage={setMessage} />

      <Heading name="Numbers" />
      <Persons personList={personList} setPeopleList={setPeopleList} setMessage={setMessage} /> 
    </div>
  )
}

export default App