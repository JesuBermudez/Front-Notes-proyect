import NotePreview from "../../../../components/NotePreview/NotePreview";
import { NoteTypeBadge } from "../../../../components/ui/NoteTypeBadge";
import { priorityOrder, type Note } from "../../types";
import "./NoteList.css";

interface NoteListProps {
  notes: Note[];
  toggleNewNote: (mode?: string) => void;
}

export default function NoteList({ notes, toggleNewNote }: NoteListProps) {
  return (
    <>
      <section className="notes-container">
        {notes.map((note) => (
          <NotePreview
            key={note.id}
            note={note}
            toggleNewNote={toggleNewNote}
          />
        ))}
      </section>
      <div className="notes-type-container">
        {Object.entries(priorityOrder).map(([type, _]) => (
          <section key={type} className="notes-type-section">
            <NoteTypeBadge type={type as Note["type"]} />
            <div className="notes-type-list">
              {notes
                .filter((note) => note.type === type)
                .map((note) => (
                  <NotePreview
                    key={note.id}
                    note={note}
                    toggleNewNote={toggleNewNote}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
