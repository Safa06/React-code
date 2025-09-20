
import './App.css'

import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import Counter from './Counter';
import { Suspense } from 'react';
import Friend from './Friend';

// way - 1
// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())


// way - 2 ------- using it
const fetchFriend = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
    
  }




function App() {

  const friendsPromise = fetchFriend();
  

  const time = 50;
  const actors = ['bappa', 'omar', 'sunny', 'deol'];

  const singers = [
    { id: 1, name: 'Mahfuz', age: 65 },
    { id: 2, name: 'Helal', age: 32 },
    { id: 3, name: 'Tahsin', age: 45 },
  ]

  function handleClick() {
    alert('Button is clicked!');
  }

  const handleClick2 = () =>{
    alert('Button is clicked 2!');
  }

  return (
    <>
      <h1>REACT MODULE STARTS - 36</h1>
      <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Learn JS" isDone={false}></ToDo>

      {
        actors.map(actor => <Actor actor={actor}
        ></Actor>)
      }

      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }

      <button onClick = {handleClick}>Click here</button>
      <button onClick = {handleClick2}>Click here 2</button>
      <button onClick = {()=>alert('Button is clicked 3')}>Click here 3</button>


      <Counter></Counter>


       {/* <div>
        { <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> }
      </div> */}



      {/* // use component */}

      <Suspense fallback={<h3>Friends are coming ... </h3>}>
        <Friend friendsPromise ={friendsPromise}></Friend>
      </Suspense>



    </>
  )
}




export default App
