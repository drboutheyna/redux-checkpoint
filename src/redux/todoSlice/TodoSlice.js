import { createSlice  } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
     todolist:[
      {
        id: Math.random(),
        title:"to do item 1",
        description:"description todo item 1",
        isDone: false,
      },
       {
        id: Math.random(),
        title:"to do item 2",
        description:"description todo item 2",
        isDone: false,
      },
       {
        id: Math.random(),
        title:"to do item 3",
        description:"description todo item 3",
        isDone: true,
      },
     ]
  },
   reducers:{

   addTask: (state, action) => {
     state.todolist.push(action.payload);
    },
     removeTask: (state, action) => {
     state.todolist=state.todolist.filter((el)=>el.id !==action.payload.id);
    },
    doneTask: (state, action) => {
      
      let i = state.todolist.findIndex((el)=>el.id === action.payload.id)
   state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone}
    },
    EditTask: (state, action) => {
      
      let i = state.todolist.findIndex((el)=>el.id === action.payload.id)
   state.todolist[i]={...state.todolist[i],
  title:action.payload.title,
description:action.payload.description}
    },
  },
  }
);


// Action creators are generated for each case reducer function
export const {  addTask ,removeTask  , doneTask , EditTask} = TodoSlice.actions

export default TodoSlice.reducer