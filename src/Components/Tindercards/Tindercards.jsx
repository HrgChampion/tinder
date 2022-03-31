import React, { useState ,useEffect} from 'react'
import "./Tindercards.css"
import Tindercards from "react-tinder-card";

function Tindercard() {
    const [people,setPeople] =useState([])
const  getData=async()=>{
let response=await fetch("https://tinder-profile.herokuapp.com/tindercard");
let data=await response.json();
setPeople(data);
}

useEffect(()=>{
    getData();
},[])


    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //  setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log("removing: " + name);
    };
  return (
    <div className='tinder-cards'>
   <div className='tindercards__cardContainer'>
   {people.map((person)=>( 
     
    <Tindercards
    className="swipe"
    preventSwipe={['up','down']}
    
    onSwipe={(dir)=>swiped(dir,person.name)}
   
    onCardLeftScreen={()=>outOfFrame(person.name)}
    key={person.name}
    
    >
        <div style={{backgroundImage: `url( ${person.url})`   }}
            className ="card"
        >
            <h3>{person.name}</h3>
        </div>
    </Tindercards>
   ))}
   </div>
    </div>
  )
}

export default Tindercard