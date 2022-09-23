import { useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";

const App = () =>{
  const [notes, setNotes] = useState([
    {
      id : nanoid(),
      text: "This is my first note here!",
      date: "10/04/2015",
    },
    {
      id : nanoid(),
      text: "This is my second note here!",
      date: "10/04/2015",
    },
    {
      id : nanoid(),
      text: "This is my third note here!",
      date: "10/04/2015",
    },
    {
      id : nanoid(),
      text: "This is my FOURTH note here!",
      date: "10/04/2015",
    },
  ]);

  const[searchText, setSearchText] = useState('');

  const[darkMode, setDarkMode] = useState(false);

  useEffect( ()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-note-data')
    );
    
    if(savedNotes){
      setNotes(savedNotes);
    }

  }, [])

  useEffect( ()=>{
    localStorage.setItem(
      'react-notes-data', 
       JSON.stringify(notes)
    );
  },[notes]);



  

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  const deleteNote = (id) =>{
    const newNotes = notes.filter((note) => note.id !==id);
    setNotes(newNotes);
  }

  return <>
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText) )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
    </div>
  </div>
    
  </>
}
export default App;