import {useSelector,useDispatch} from "react-redux";
import React from 'react'
import {useEffect} from "react";
import {addData, fetchData} from "./store/dataSlice";
function App() {
  const data = useSelector(state => state.dataSlice.data)
  const dispatch = useDispatch();



  useEffect(()=>{
    return ()=>{dispatch(fetchData({symbol:'BTCUSDT',time:'1w',count:100}))};
  },[dispatch])


  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div>

    </div>
  );
}

export default App;
