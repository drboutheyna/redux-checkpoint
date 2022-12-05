import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'


const TodoList = () => {
const todos = useSelector(state=> state.todo.todolist)

  return (
    <div className='todo-list'>
       <AddTodo/>
       {todos.map((el)=>(
      <TodoItem todo={el}/>
      ))}</div>
  )
}

export default TodoList