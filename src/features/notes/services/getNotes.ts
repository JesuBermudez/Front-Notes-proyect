import axios from "axios";
import type { Note } from "../types";

export async function getNotes(): Promise<Note[]> {
  try {
    const result = await axios.get("http://localhost:3000/tasks");
    return result.data as Note[];
  } catch (error) {
    console.error("Error creating note:", error);
  }
  return [];
}
