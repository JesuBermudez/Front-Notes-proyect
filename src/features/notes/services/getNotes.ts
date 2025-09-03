import axios from "axios";
import type { Note } from "../types";

export async function getNotes(): Promise<Note[]> {
  try {
    const result = await axios.get(`${process.env.API_NOTES}/events`);
    if (result.status == 200) {
      return result.data as Note[];
    }
  } catch (error) {
    console.error("Error creating note:", error);
  }
  return [];
}
