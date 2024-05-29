import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Todo from './assets/Todo';
import Header from './assets/header';
import TodoForm from './assets/TodaForm';
import server from './Server/todo-list'

function App() {


  const headerStyle = {
    marginBottom: '10px',
    padding: '20px'
  };
  const buttonStyle = {
    height: '40px', // Example height
    width: '250px', // Example width
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };


  var [arr, setArr] = useState([{
    name: "Task 1",
    desc: "This is the first task",
    status: false
  },
  {
    name: "Task 2",
    desc: "This is the second task",
    status: false
  }]);


  var [dep, setdep] = useState(1);
  var [Todoindex,setTodoIndex] = useState({})
  var [comCount, setCount] = useState(0);
  var [update,setUpdate] = useState({flag : true , id : -1})

  let addTodo = async (data) => {
      await server.add(data);
      setArr(server.getAll())
      // console.log(server.getAll())
    setdep(cur => cur + 1)
 
  }
  let deleteToDo = async (ind)=>{
    // console.log(ind)
    server.remove(ind);
      setdep(cur => cur - 1)
      setCount(server.CompletedList())

  } 
  let editTodo = (ind)=>{

      setTodoIndex(server.get(ind))
      setUpdate({flag : false , id : ind})
  }
  let addTodoIndex = (data)=>{
    server.update(update.id.number,data)
    setUpdate({flag : true , id : -1})
  }
  let completed = (ind)=>{
    server.complete(ind)
    setCount(server.CompletedListCount())
  }
  let CompletedList = ()=>{
    setArr(server.CompletedList())
  }
  let AllList = () =>{
    setArr(server.getAll())
  }
  useEffect(() => {

    setArr(server.getAll())
    setCount(server.CompletedListCount())

  }, [])

  return (
    <>
      <div style={headerStyle}>
        <Header />
      </div>
      <div style={headerStyle}>
      { update.flag ? 
        <TodoForm addTodo={addTodo} /> : <TodoForm addTodo={addTodoIndex} getTodo={Todoindex}  />
      }
      </div>


      <Todo arr={arr} deleteTodo = {deleteToDo} editTodo={editTodo} completed = {completed} />


      <button style={buttonStyle} onClick={() => CompletedList()} >Completed Task   :- ( {comCount} )</button>
      <button style={buttonStyle}  onClick={() => AllList()} >All Todo </button>
    </>
  );
}

export default App;

//309004152020