import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick} >{props.text}</button>
  )
}
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}
const Statistics = ({ good, neutral, bad })=>
{
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const percentagePositive = good * 100 / total;
  const stats = <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={percentagePositive + " %"} />
      </tbody>
  </table>
  return (
    <div>
      <h1>statistics</h1>
      {total ? stats : <p>No feedback given</p> }
      
    </div>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGoodFeedback = () => {
    setGood(good + 1);
  }
  const increaseNeutralFeedback = () => {
    setNeutral(neutral + 1);
  }
  const increaseBadFeedback = () => {
    setBad(bad + 1);
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={increaseGoodFeedback} />
      <Button text="neutral" handleClick={increaseNeutralFeedback} />
      <Button text="bad" handleClick={increaseBadFeedback} />
      <Statistics good={good} bad={bad} neutral={neutral} />      
    </div>
  )
}

export default App