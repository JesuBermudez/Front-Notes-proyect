import { useState } from "react";
import type { Note } from "../../features/notes/types";
import { createNote } from "../../features/notes/services/createNote";
import { editNote } from "../../features/notes/services/editNote";
import { ChkeckIcon } from "../icons/Check";
import { CloseIcon } from "../icons/Close";
import { EditIcon } from "../icons/Edit";
import "./NewNote.css";

interface HandleModalProps {
  note?: Note;
  mode?: string;
  handleNewNote: (note: Note) => void;
  toggleNewNote: (mode?: string, note?: Note) => void;
}

export function NewNote({
  note,
  mode = "create",
  handleNewNote,
  toggleNewNote,
}: HandleModalProps) {
  const [newNote, setNewNote] = useState<Note>(
    note || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      type: "normal",
      completed: false,
      date: new Date().toISOString(),
    }
  );
  const formIcon =
    mode === "view" ? (
      <EditIcon className="new-note-edit-icon" />
    ) : (
      <ChkeckIcon className="new-note-check-icon" />
    );
  const disabled = mode === "view";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let response = "";
    switch (mode) {
      case "view":
        toggleNewNote("edit", newNote);
        break;
      case "create":
        response = await createNote(newNote);
        if (response === "Error creating note") {
          alert("Error al crear la nota. Por favor, inténtalo de nuevo.");
          return;
        }
        handleNewNote(newNote);
        toggleNewNote();
        break;
      case "edit":
        response = await editNote(newNote);
        if (response === "Error editing note") {
          alert("Error al editar la nota. Por favor, inténtalo de nuevo.");
          return;
        }
        handleNewNote(newNote);
        toggleNewNote();
        break;
      default:
        break;
    }
    event.currentTarget.reset();
  }

  return (
    <div className="new-note-container">
      <section className="new-note">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={newNote.title}
            onChange={(e) =>
              setNewNote({
                ...newNote,
                title: e.target.value,
              })
            }
            disabled={disabled}
            required
          />
          <CloseIcon
            className="new-note-close-icon"
            onClick={() => toggleNewNote("create")}
          />
          <textarea
            name="description"
            placeholder="Descripción"
            value={newNote.description}
            onInput={(e) => {
              const target = e.currentTarget;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight - 50}px`;
            }}
            onChange={(e) =>
              setNewNote({
                ...newNote,
                description: e.target.value,
              })
            }
            disabled={disabled}
            required
          ></textarea>
          <div>
            <fieldset className="new-note-priority">
              <label>
                <input
                  type="radio"
                  name="type"
                  value={"urgent"}
                  checked={newNote.type === "urgent"}
                  disabled={disabled}
                  onChange={() =>
                    setNewNote({
                      ...newNote,
                      type: "urgent",
                    })
                  }
                />
                Importante
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value={"normal"}
                  checked={newNote.type === "normal"}
                  disabled={disabled}
                  onChange={() => setNewNote({ ...newNote, type: "normal" })}
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value={"recurring"}
                  checked={newNote.type === "recurring"}
                  disabled={disabled}
                  onChange={() => setNewNote({ ...newNote, type: "recurring" })}
                />
                Recurrente
              </label>
            </fieldset>
            <button type="submit">{formIcon}</button>
          </div>
        </form>
      </section>
    </div>
  );
}
