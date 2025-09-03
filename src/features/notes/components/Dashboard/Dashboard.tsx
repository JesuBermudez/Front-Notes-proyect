import type { Note } from "../../types";
import NoteList from "../NoteList/NoteList";
import "./Dashboard.css";

type DashboardProps = {
  notes: Note[];
  toggleNewNote: (mode?: string) => void;
};

export default function Dashboard({ notes, toggleNewNote }: DashboardProps) {
  return (
    <main className="dashboard">
      <section className="dashboard-header">
        <h2>Notas</h2>
        <button onClick={() => toggleNewNote()}>+</button>
      </section>

      <NoteList notes={notes} toggleNewNote={toggleNewNote} />
    </main>
  );
}
