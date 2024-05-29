import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import server from '../Server/todo-list';
import './form.css'

function FormWithTwoInputs({addTodo ,getTodo={name:"",desc:""} ,id }) {

  const { register, handleSubmit ,setValue} = useForm()
  setValue("name",getTodo.name)
  setValue("desc",getTodo.desc)

  return (
    <form className="form" onSubmit={handleSubmit(addTodo)}>
      <div className="form-group">
        <label htmlFor="input1">Todo Name:</label>
        <input {...register("name")} id="input1"  className='todoInputs'/>
      </div>
      <div className="form-group">
        <label htmlFor="input2">Todo's Desc:</label>
        <input {...register("desc")}  id="input2"  className='todoInputs' />
      </div>
      <button type="submit" className='buttonForm'>Submit</button>
    </form>
  );
}
export default FormWithTwoInputs;



