import axios from "axios";
import type { event } from "../types";

export async function createNote(note: event): Promise<string> {
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_API_NOTES}/events`,
      note,
    );
    if (result.status == 201) {
      return "Note created successfully";
    }
  } catch (error) {
    console.error("Error creating note:", error);
  }
  return "Error creating note";
}
