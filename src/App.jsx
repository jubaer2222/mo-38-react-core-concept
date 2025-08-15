
import { configs } from 'eslint-plugin-react-refresh';
import './App.css'

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Jubaer" tech="JS"></Developer>
      <Developer name="Junaid" tech="Python"></Developer>
      <Developer name="Ridhoy" tech="TS"></Developer>
    </>
  )
}

function Developer(props){
  console.log(props);
  return(
    <div style={{
      border:'2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person(){
  const age =24;
  const name = 'Jubaer'

  const personStyle = {
    color: 'yellow',
    textAlign:'right'
  }

  return(
   <p style={personStyle}>I am {name} . age : {age}</p>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

export default App
