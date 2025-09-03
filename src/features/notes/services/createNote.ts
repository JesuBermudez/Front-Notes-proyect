import axios from "axios";
import type { Note } from "../types";

export async function createNote(note: Note): Promise<string> {
  try {
    const result = await axios.post("http://localhost:3000/tasks", note);
    if (result.status == 201) {
      return "Note created successfully";
    }
  } catch (error) {
    console.error("Error creating note:", error);
  }
  return "Error creating note";
}
