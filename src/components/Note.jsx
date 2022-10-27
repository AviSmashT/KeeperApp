import React from "react";

function Note(props) {

// when delete clicked:
function handleClick(id){ 
  props.deleteNote( (prevItems) => {
    return prevItems.filter((item, index) => {
      return index !== id; // return if index not as id argument
    });
  });
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={ () => handleClick(props.id)} >DELETE</button> {/* to pass props.id as argument we need to use arrow function */}
    </div>
  );
}

export default Note;
