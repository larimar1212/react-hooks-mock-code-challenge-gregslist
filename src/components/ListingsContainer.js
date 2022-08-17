import React  from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listings}) {


  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          const {id, description, image, location} = listing // dumb FUCKING BITCH ITS SN OBJECT 
        
          return (
            <ListingCard 
            key={id} 
            description={description}
            image={image}
            location={location}
            /> 
            ) 
        })}
      </ul>
    </main>
)}


export default ListingsContainer;
