import React from 'react'
import {useEffect,useState} from "react";
import {useGetDataQuery} from "./store/dataQuery";

function App() {
const {data=[],isLoading} = useGetDataQuery();

useEffect(()=>{
  data.length &&console.log(data);

},[data]);

if(isLoading) return <h1>Loading</h1>
  return (
    <div>
    
    </div>
  );
}

export default App;
