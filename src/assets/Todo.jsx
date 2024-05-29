
import React from 'react'
// import './Todo.css'
import Todocard from './Todocard';



function Todo({ arr ,deleteTodo , editTodo , completed }) {
    // console.log(arr)
    return (
        <>

            {arr.map((element) => {
                return (
                    <Todocard number={element.id} element={element} 
                    deleteTodo={deleteTodo} editTodo = {editTodo} completed={completed} />
                
                );
            })}

        </>
    )

}

export default Todo