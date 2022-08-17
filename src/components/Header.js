import React, {useState} from "react";
import Search from "./Search";


function Header({listings}) {
  const [filter, filterByName] = useState('')
  

  const searchName = listings.filter((liname) => {
    return liname.toLowerCase().includes.filterByName().toLowerCase()
  })



  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search />
    </header>
  );
}

export default Header;


//Onchange e . trget .vALUE? NDEIEDEI