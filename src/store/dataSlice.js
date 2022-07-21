import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name:'data',
    initialState:{
        loading:false,
        data:[],

    },
    reducers:{
        addData:(state,{payload})=>{
            state.data.push(payload)
        },
    }
})
export default dataSlice.reducer
export const {addData} = dataSlice.actions
