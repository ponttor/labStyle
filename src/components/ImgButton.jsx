import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

export default function ImgButton({ number, url}) {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();
    history.push(url);
  }
  return (
    <div>
            <button onClick={handleClick} className=" btn btn-warning rounded-circle border border-danger w-500 h-100">{number}</button> 
    </div>
  )
}