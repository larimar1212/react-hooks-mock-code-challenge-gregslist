import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const[listings, setListings] = useState([])
  
useEffect(() => {
  const fetchData = async () => {
    let req = await fetch('http://localhost:6001/listings/')
   let res = await req.json()
      setListings(res)
      console.log(res)
    }
    fetchData()

}, [])


  return (

    <div className="app">
      <Header />
      <ListingsContainer listings={listings} setListings={setListings}/>
    </div>
  );
}

export default App;


/// when the app starts, see all listings means 
// get data somewhere to show up somewhere 
// remove and delete here and then pass it into listing Card as a parameter,
// and call back function
// essntially remove object  method
// on CLICK of the trash can you remove it 