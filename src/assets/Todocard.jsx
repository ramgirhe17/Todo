import React from 'react'
import './App.css'
function    Todocard({ number, element ,deleteTodo ,editTodo,completed}) {
    return (
        <>
            <div id="card" key={number} >
               <div  onClick={() => completed(number)}>
                <h3  style={{display:'flex' , justifyContent: 'center' }} >
                    {element.status && <span> (✓)</span>}<span>{element.id} :- </span> {element.name}
                </h3>
                <p  className='description'>{element.desc}</p>
                {/* <p className='description'>{element.status + ""}</p> */}
                </div>
                <div key={number} className="button">
                    <button onClick={() => editTodo({number})} >Edit</button>
                    <button onClick={() => deleteTodo({number})} >Delete</button>
                </div>
            </div>
        </>
    )

}

export default Todocard