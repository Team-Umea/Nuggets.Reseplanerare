import { useState,useEffect } from "react";
function TravelForm({addTravel,land,setLand,city,setCity,date,setDate,activity,setActivity}) {

const handleClick = (e)=>{
e.preventDefault()
const newTravel = {land,city,date,activity};
addTravel(newTravel)

setActivity("");
setCity("");
setLand("");
setDate("");
}

    return (
<form onSubmit={handleClick}>
    <input type="text" 
    placeholder="Land" 
    value={land} 
    onChange={(e)=>{
        setLand(e.target.value)
        
    }}required />
    <input type="text" 
    placeholder="Stad" 
    value={city}
    onChange={(e)=>{
        setCity(e.target.value)
       
    }}required/>
    <input type="date"
     value={date}
     onChange={(e)=>{
         setDate(e.target.value)
         
    }}required />
    <input type="text"
     placeholder="aktivitet"
     value={activity}
     onChange={(e)=>{
         setActivity(e.target.value)
        
        }}required/>
    <button onSubmit={handleClick}>lägg till resa</button>

</form>
      );
}

export default TravelForm;