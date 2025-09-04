import type { User } from "../../notes/types";

export default async function login(
  email: string,
  pass: string,
): Promise<User | string> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_AUTH}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.user as User;
    }
  } catch (error) {
    console.error("Error during login:", error);
    return "Login failed";
  }
  return "Login failed";
}
