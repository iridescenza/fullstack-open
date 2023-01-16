import { useState } from 'react'


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
    {text}
  </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value = {good} />
          <StatisticLine text="neutral" value = {neutral} />
          <StatisticLine text="bad" value = {bad} />
          <StatisticLine text="all" value = {good + neutral + bad} />
          <StatisticLine text="average" value = {((good * 1 + bad * -1) / (good + neutral + bad)).toFixed(1)}/>
          <StatisticLine text="positive (%)" value = {(good / (good + neutral + bad) * 100).toFixed(1)}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App