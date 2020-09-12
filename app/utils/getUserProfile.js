import { BACKEND_URL } from "@env";

const getUserProfile = async () => {
  const response = await fetch(`${BACKEND_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  });

  return response.json();
};

export default getUserProfile;
