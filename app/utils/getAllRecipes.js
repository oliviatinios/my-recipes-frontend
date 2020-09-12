import { BACKEND_URL } from "@env";

const getAllRecipes = async () => {
  const response = await fetch(`${BACKEND_URL}/recipes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  });

  return response.json();
};

export default getAllRecipes;
