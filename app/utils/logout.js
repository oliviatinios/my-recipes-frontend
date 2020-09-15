import { BACKEND_URL } from "@env";

const logout = async () => {
  const response = await fetch(`${BACKEND_URL}/users/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  });

  //TODO: Handle 'JSON Parse error: Unexpected EOF'
  if (response.status !== 200) {
    throw new Error("Something went wrong.");
  }
};

export default logout;
