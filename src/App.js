import Header from "./components/Header";
import {useState} from "react"
import { useEffect } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

const userDetails = [
  {
    id : 1,
    student : "john1",
    dep : "cse",
  },
  {
    id : 2,
    student : "john2",
    dep : "cse",
  },
  {
    id : 3,
    student : "john3",
    dep : "cse",
  },
  {
    id : 4,
    student : "john4",
    dep : "cse",
  },{
    id : 5,
    student : "john5",
    dep : "cse",
  }
]

function App(){

  const [count,setCount] = useState(0);
  const [valid,setValid] = useState(false);
  const [user,setUser] = useState({
    id : 1,
    student : "john",
    dep : "cse",
  })
  const [color,setColor] = useState("blue")

  useEffect(()=>{
    console.log("i m useEffect")
  },[count])

  
  function handleClick(){
    // setUser({...user,student : "david",})
    // setColor("red")
    // console.log("i am clicked")
    setCount(count + 1)
  }

  function handleIncrement(){
    setCount(count + 1)
    if(count === 15){
      setValid(true)
    }

  }

  function handleDecrement(){
    setCount(count - 1)
  }

  return(
    <div>
      {/* {
        valid === true ? <h1>Welcome</h1> : <div> <button onClick={handleDecrement}>decrement</button>
        <h1>{count}</h1>
        <br/>
        <button onClick={handleIncrement}>increment</button></div>
      } */}

      {/* <h1 style={{backgroundColor:color}}>{user.id}</h1>
      <h1 style={{backgroundColor:color}}>{user.student}</h1>
      <h1 style={{backgroundColor:color}}>{user.dep}</h1>
      <button onClick={handleClick} >Click me</button> */}

      {/* {
        userDetails.map(item =>(
          <h1>{item.student}</h1>
        ))

      } */}
{/* 
      <button onClick={handleClick} >Click me</button>

      <h1>{count}</h1> */}

      <Header/>
      <Body name = "elon" description="This snippet is based on the counter example from the previous page, but we added a new feature to it: we set the document title to a custom message including the number of clicks."/>
      <UserList  user={userDetails}/> 
      <Footer/>
    </div>

  )
}

export default App;