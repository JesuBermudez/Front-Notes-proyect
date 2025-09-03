export default async function register(
  name: string,
  email: string,
  pass: string
) {
  try {
    const response = await fetch(`${process.env.API_AUTH}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, pass }),
    });
    if (!response.ok) {
      return "Registration failed";
    }
  } catch (error) {
    console.error("Error during registration:", error);
    return "Registration failed";
  }
  return "Registration successful";
}
