import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {// array for all notes - array of objects
  const [notes, setNotes] = useState([])

  return (
    <div>
      <Header />
      <CreateArea onAdd={setNotes} />
      {notes.map( (note, index) => 
         (<Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={setNotes} // pass over the setNotes function
          />) // end return
        ) // end map
        }
      <Footer />
    </div>
  );
}

export default App;
