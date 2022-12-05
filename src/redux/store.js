import { configureStore } from '@reduxjs/toolkit'
import todoSlice  from './todoSlice/TodoSlice';

export default configureStore({
  reducer: {
todo: todoSlice
    
  },
});