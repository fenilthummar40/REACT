import { createSlice } from "@reduxjs/toolkit";
export const Counter = createSlice({
    name:"Counter",
    initialState:{ data: []},
    reducers:{
        addData:(state,action) => {
        state.data.push(action.payload);
      },
        deleteData:(state,action) => {
        let deleteItem = state.data.filter((item) => item.id != action.payload);
        state.data = deleteItem

      },
        updateData:(state,action) => {
        let singleData = state.data.find((item) => item.id != action.payload);
        singleData.id = action.payload.id
        singleData.name = action.payload.name
        singleData.subject = action.payload.subject

      },

    }
})

export const { addData, deleteData, updateData} = Counter.actions;
export default Counter.reducer;