import { useState } from 'react'

const Heading = ({headingText}) => <h1>{headingText}</h1>

const Button = ({clickAction, text}) => <button onClick={clickAction}>{text}</button>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading headingText="give feedback" />
      <Button text="good" clickAction={() => setGood(good+1)} />
      <Button text="neutral" clickAction={() => setNeutral(neutral+1)} />
      <Button text="bad" clickAction={() => setBad(bad+1)} />
      <Heading headingText="statistics" />
      good {good} <br/>
      neutral {neutral} <br/>
      bad {bad} <br/>
    </div>
  )
}

export default App