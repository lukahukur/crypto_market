import {createSlice,createAsyncThunk,} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async ({symbol,time,count})=>{
                const res = await fetch(`http://localhost:2004/${symbol}/${time}/${count}`).then(data => data.json());
                return res

    }
)
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
    },extraReducers:{
        [fetchData.pending]:(state)=>{
           state.loading = true;

        },
        [fetchData.fulfilled]:(state,action)=>{
          state.loading = false;
          state.data = action.payload
        },
        [fetchData.rejected]:(state)=>{
            state.loading = false;
        }
    }
})
export default dataSlice.reducer
export const {addData} = dataSlice.actions
