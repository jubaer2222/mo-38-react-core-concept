

import './App.css'
import ToDo from './Todo'

function App() {

  const time = 50;

  return (
    <>
      <h1>React Core Concepts</h1>
      <ToDo
        task="Learn react"
        isDone={true}
        time={time}></ToDo>
      <ToDo
        task="Revise JS"
        isDone={false}></ToDo>
      <ToDo
        task="Take a Shower"
        isDone={true} 
        time="30"></ToDo>
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Jubaer" tech="JS"></Developer>
      <Developer name="Junaid" tech="Python"></Developer>
      <Developer name="Ridhoy" tech="TS"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Musfiq" runs="5000"></Player>
      <Salami event="Roja Eid" amount="20"></Salami>
      <Salami event="Grduation" ></Salami> */}
    </>
  )
}

function Salami({ event, amount = 0 }) {
  return (
    <div className='student'>
      <p>Salami for: {event} </p>
      <p>Amount: {amount} </p>
    </div>

  )
}

function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person() {
  const age = 24;
  const name = 'Jubaer'

  const personStyle = {
    color: 'yellow',
    textAlign: 'right'
  }

  return (
    <p style={personStyle}>I am {name} . age : {age}</p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

export default App
