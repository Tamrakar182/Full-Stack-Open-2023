import { useState } from 'react'

const Button = ({text, action}) => <button onClick={action}>{text}</button>

const Anecdote = ({anecdote}) => <p>{anecdote}</p>

const Votes = ({numbers}) => <p>has {numbers} votes</p>

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint16Array(anecdotes.length))

  const getRandomSelection = () => {
    setSelected(getRandomNumber(0,anecdotes.length))
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const voteCurrent = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  
  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes numbers={votes[selected]} />
      <Button text="next anecdote" action={getRandomSelection} />
      <Button text="vote" action={voteCurrent} />
    </div>
  )
}

export default App