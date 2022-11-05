import React, {useState} from "react";

function CreateArea(props) {
  
  const [newNote, setNewNote] = useState({ // current note
    title:"",
    content:""
  });

  function handleChange(event){ // get value and name of the input box
    const {value, name} = event.target;
    
    setNewNote( (prevValue) => { 
      return { // return an object with previous data and [name]:value which give the name and value of the event and change the object accordingly 
        ...prevValue,
      [name]:value}
    });
    };

    
  function handleClick(event){
    props.onAdd( (prevValue) => { // add current note (from input box) to array
      return [...prevValue, // add prevValues + new note (array of objects)
      { // new note 
        title:newNote.title,
        content:newNote.content
      }]
    } // end arrow function
    ) //end addNote

    
    event.preventDefault(); // this prevent the default action (refresh page) of form element after submiting something
    setNewNote({
      title:"",
      content:""
    })

  } // end handleClick


  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={newNote.content} />
        <button onClick={handleClick} >Add</button>
      </form>
    </div>
  )
}

export default CreateArea;
