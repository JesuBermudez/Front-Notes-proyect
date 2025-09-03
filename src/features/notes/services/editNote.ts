import axios from "axios";
import type { Note } from "../types";

export async function editNote(note: Note): Promise<string> {
  return "Note edited successfully";
  try {
    const result = await axios.put(
      `${process.env.API_NOTES}/events/${note.id}`,
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
