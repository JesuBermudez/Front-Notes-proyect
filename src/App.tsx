import { useEffect, useState } from "react";
import Dashboard from "./features/notes/components/Dashboard/Dashboard";
import Header from "./features/notes/components/Header/Header";
import { NewNote } from "./components/NewNote/NewNote";
import { priorityOrder, type Note } from "./features/notes/types";
import { getNotes } from "./features/notes/services/getNotes";
import { deleteNote } from "./features/notes/services/deleteNote";

export default function App() {
  const [notes, setNotes] = useState([] as Note[]);
  const [showNewNote, setShowNewNote] = useState(false);
  const [mode, setMode] = useState("create");
  const [selectedNote, setSelectedNote] = useState<Note | undefined>(undefined);

  useEffect(() => {
    async function fetchNotes() {
      const notes = await getNotes();
      setNotes(
        notes.sort((a, b) => {
          const order = priorityOrder[a.type] - priorityOrder[b.type];
          if (order !== 0) return order;
          return a.title.localeCompare(b.title);
        })
      );
    }
    fetchNotes();
  }, []);

  function handleNewNote(note: Note) {
    if (mode === "create") {
      setNotes((prevNotes) => [note, ...prevNotes]);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n.id === note.id ? note : n))
      );
    }
  }

  async function toggleNewNote(mode: string = "create", note?: Note) {
    switch (mode) {
      case "delete":
        const response = await deleteNote(note!.id);
        if (response === "Note deleted successfully") {
          setNotes((prevNotes) => prevNotes.filter((n) => n.id !== note!.id));
        }
        break;
      case "edit":
        setShowNewNote(true);
        break;

      default:
        setShowNewNote((prev) => !prev);
        break;
    }

    setSelectedNote(note);
    setMode(mode);
  }
  return (
    <>
      <Header toggleNewNote={toggleNewNote} />
      <Dashboard notes={notes} toggleNewNote={toggleNewNote} />
      {showNewNote && (
        <NewNote
          mode={mode}
          note={selectedNote}
          toggleNewNote={toggleNewNote}
          handleNewNote={handleNewNote}
        />
      )}
    </>
  );
}
