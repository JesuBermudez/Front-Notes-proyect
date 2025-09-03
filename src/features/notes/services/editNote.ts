import axios from "axios";
import type { Note } from "../types";

export async function editNote(note: Note): Promise<string> {
  try {
    const result = await axios.put(
      `http://localhost:3000/tasks/${note.id}`,
      note
    );
    if (result.status === 200) {
      return "Note edited successfully";
    }
  } catch (error) {
    console.error("Error editing note:", error);
  }
  return "Error editing note";
}
