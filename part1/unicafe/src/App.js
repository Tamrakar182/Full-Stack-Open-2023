import { useState } from 'react'

const Heading = ({headingText}) => <h1>{headingText}</h1>

const Button = ({clickAction, text}) => <button onClick={clickAction}>{text}</button>

const StatisticsLine = ({name, value}) => {
  return(
    <tr>
      <td>{name}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({count}) => {
  if(count[0] || count[1] || count[2] > 0) {
    return (
      <table>
        <tbody>
          
        <StatisticsLine name="good" value={count[0]} />
        <StatisticsLine name="neutral" value={count[1]} />
        <StatisticsLine name="bad" value={count[2]} />
        <StatisticsLine name="all" value={count[3]} />
        <StatisticsLine name="average" value={count[4]} />
        <StatisticsLine name="positive" value={count[5]} />
        
        </tbody>
        
      </table>
    )
  }
  return (
    <p>No feedback given</p>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercent, setPositivePercent] = useState(0)

  const handleGood = () => {
    setGood(good+1)

    const updatedGood = good+1
    setTotal(updatedGood+neutral+bad)

    const updatedTotal = total+1
    setAverage((updatedGood-bad)/updatedTotal)

    setPositivePercent((updatedGood/updatedTotal)*100 + "%")
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)

    const updatedNeutral = neutral+1
    setTotal(good+bad+updatedNeutral)

    const updatedTotal = total+1
    setPositivePercent((good/updatedTotal)*100 + "%")
  }

  const handleBad = () => {
    setBad(bad+1)

    const updatedBad = bad+1
    setTotal(good+neutral+updatedBad)

    const updatedTotal = total+1
    setAverage((good-updatedBad)/updatedTotal)

    setPositivePercent((good/updatedTotal)*100 + "%")
  }


  return (
    <div>
      <Heading headingText="give feedback" />
      <Button 
        text="good" 
        clickAction = {handleGood}
      />
      <Button 
        text="neutral" 
        clickAction = {handleNeutral} 
      />
      <Button 
        text="bad" 
        clickAction = {handleBad} 
      />
      
      <Heading headingText="statistics" />
      <Statistics count={[good, neutral, bad, total, average, positivePercent]} />
    </div>
  )
}

export default App