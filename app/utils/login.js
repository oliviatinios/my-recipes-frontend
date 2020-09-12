import { BACKEND_URL } from "@env";

const login = async (email, password) => {
  const response = await fetch(`${BACKEND_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  //TODO: Handle 'JSON Parse error: Unexpected EOF'
  if (response.status === 400) {
    throw new Error();
  }

  return response.json();
};

export default login;
