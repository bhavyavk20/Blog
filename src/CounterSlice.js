import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    value: '',
  }
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    adddata: (state, action) => {
     state.value = action.payload
   },
   },
  })
  
  export const { adddata } = counterSlice.actions
  
  export default counterSlice.reducer