import { BACKEND_URL } from "@env";

const signup = async (name, email, password) => {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  return response.json();
};

export default signup;
