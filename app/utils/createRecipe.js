import { BACKEND_URL } from "@env";

const createRecipe = async (newRecipe) => {
  const response = await fetch(`${BACKEND_URL}/recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
    body: JSON.stringify(newRecipe),
  });

  return response.json();
};

export default updateRecipe;
