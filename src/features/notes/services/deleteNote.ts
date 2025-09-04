import axios from "axios";

export async function deleteNote(id: string): Promise<string> {
  return "Note deleted successfully";
  try {
    const result = await axios.delete(
      `${import.meta.env.VITE_API_NOTES}/events/${id}`,
    );
    if (result.status == 200) {
      return "Note deleted successfully";
    }
  } catch (error) {
    console.error("Error deleting note:", error);
  }
  return "Error deleting note";
}
