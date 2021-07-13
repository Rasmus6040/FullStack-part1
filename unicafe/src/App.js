import React, { useState } from 'react'

const Statistic = ({text, value, text2}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {text2}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if((good+bad+neutral)===0){
    return(
      <p>
        No feedback given
      </p>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good}/>
        <Statistic text="neutral" value={neutral}/>
        <Statistic text="bad" value={bad}/>
        <Statistic text="average" value={(good-bad)/(good+bad+neutral)}/>
        <Statistic text="positive" value={good/(good+bad+neutral)*100} text2="%"/>
      </tbody>
    </table>
  )
}

const Title = ({title}) => {
  return (
    <h1>
      {title}
    </h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}> {text} </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title="give feedback"/>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Title title="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
