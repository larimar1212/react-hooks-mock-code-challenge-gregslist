import React, {useState} from "react";

function ListingCard({description,image,location}) {
  const[isClicked, setClicked] = useState(false)
  const[remove, setRemoved] = useState({})
  
  const handleClick = () => {
    setClicked(isClicked => !isClicked)
  }



  //delete req 
const handleDelete= (id) => {
  fetch('http://localhost:6001/listings/:id',
  {method: 'DELETE'})
  .then(response => {
    setRemoved({response})

  })
  
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isClicked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;


//I can remove a listing from the page by clicking the trash can icon. 
//This change should be persisted in the backend.
