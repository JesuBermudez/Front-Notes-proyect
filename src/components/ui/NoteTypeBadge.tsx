import type { Note } from "../../features/notes/types";
import "./NoteTypeBadge.css";

type NoteType = Note["type"];

interface NoteTypeBadgeProps {
  type: NoteType;
}

export function NoteTypeBadge({ type }: NoteTypeBadgeProps) {
  function showType(type: string): string {
    switch (type) {
      case "urgent":
        return "Urgente";
      case "normal":
        return "Normal";
      case "recurring":
        return "Recurrente";
    }
    return "Normal";
  }

  return (
    <div className={`note-type-badge ${type}`}>
      <div />
      <p>{showType(type)}</p>
    </div>
  );
}
