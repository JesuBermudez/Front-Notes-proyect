import { useState } from "react";
import type { Note } from "../../features/notes/types";
import "./NotePreview.css";
import { NoteTypeBadge } from "../ui/NoteTypeBadge";

interface NotePreviewProps {
  note: Note;
  toggleNewNote: (mode?: string, note?: Note) => void;
}

export default function NotePreview({ note, toggleNewNote }: NotePreviewProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick(e: React.MouseEvent) {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  }

  return (
    <article
      className={`note-preview ${note.type}`}
      onClick={() => toggleNewNote("view", note)}
    >
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <NoteTypeBadge type={note.type} />

      <div className="note-menu">
        <button className="menu-btn" onClick={handleMenuClick}>
          ⋮
        </button>
        {menuOpen && (
          <ul className="menu-options" onClick={handleMenuClick}>
            <li onClick={() => toggleNewNote("edit", note)}>Editar</li>
            <li onClick={() => toggleNewNote("delete", note)}>Eliminar</li>
          </ul>
        )}
      </div>
    </article>
  );
}
