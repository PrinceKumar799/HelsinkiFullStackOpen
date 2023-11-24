import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}
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
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Uint8Array(anecdotes.length));
  
  const generateRandomIndex = () => {
    const randomIndex = (Math.floor(Math.random() * 100)) % anecdotes.length;
    setSelected(randomIndex);
   }
  const castVote = () => {
    const newVote = [...vote];
    newVote[selected]++;
    console.log(vote);
    console.log(newVote);
    setVote(newVote);
  }
  
  const findMostVotedAnecdote = () => {
    let mostVoted = 0;
    for (let i = 0; i < vote.length; i++)
    {
      if (vote[i] > vote[mostVoted])
        mostVoted = i;  
    }
    return anecdotes[mostVoted];
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={castVote} text="vote" />
      <Button handleClick={generateRandomIndex} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{findMostVotedAnecdote()}</p>
    </div>
  )
}

export default App