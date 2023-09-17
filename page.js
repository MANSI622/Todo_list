"use client"
import React from "react";
import {useState} from "react";

const page= () =>{
  
  const[title,setTitle]=useState("");
  const[desc,setdesc]=useState("");
  const[maintask,setmaintask]=useState([]);
  function changeHandler(event){
      setTitle(event.target.value);
      
  }
  function changeDescHandler(event){
    setdesc(event.target.value);
  }
  function submitHandler(event){
    event.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    setTitle("");
    setdesc("");
    console.log(maintask);
  }
  function deleteHandler(i){
    let copyTask=[...maintask]
      copyTask.splice(i,1)
      setmaintask(copyTask)
  }
  let renderTask=<h2>No TASK AVAILABLE</h2>
  if(maintask.length>0){
   renderTask= maintask.map((t,i) =>{
    return(
      <li key={i} className="flex items-center justify-between mb-5">
      <div className="flex justify-between items-center mb-5 w-2/3">
        <h5 className="text-2xl">{t.title}</h5>
        <h6 className="text-xl text-yellow-200 font-medium">{t.desc}</h6>
      </div>
      <button onClick ={() =>{
        deleteHandler(i)
      }}className="border-black bg-red-500 text-white font-bold text-2xl 
      rounded-md px-4 py-2">Delete</button>
      </li>
    )
   })
  }
  return (
   <>
   <h1 className="text-white bg-black p-5 font-bold text-5xl text-center">
     My Todo List
   </h1>
   <form onSubmit={submitHandler}>
     <input
     required
     type="text"
      className="text-2xl border-zinc-800 border-4 px-2 py-2 m-5"
      value={title}
      onChange={changeHandler}
      placeholder="Enter task Here"
     />
     <input
     required
     type="text"
      className="text-2xl border-zinc-800 border-4 px-2 py-2 m-5"
      value={desc}
      onChange={changeDescHandler}
      placeholder="Enter description Here"
     />
     <button
     className="text-white bg-black px-4 py-2 rounded-md font-semibold text-xl m-5 ">ADD TASK</button>
   </form>
   <hr/>
   <div className="bg-black p-8 text-white font-semibold text-xl mt-16">
    <ul>
      {renderTask}
    </ul>
   </div>
   </>
  )
}
export default page;