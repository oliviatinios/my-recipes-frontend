import { BACKEND_URL } from "@env";

const updateRecipe = async (_id, updatedRecipe) => {
  const response = await fetch(`${BACKEND_URL}/recipes/${_id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
    body: JSON.stringify(updatedRecipe),
  });

  return response.json();
};

export default updateRecipe;
