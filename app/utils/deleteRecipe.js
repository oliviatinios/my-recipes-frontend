import { BACKEND_URL } from "@env";

const deleteRecipe = async (_id) => {
  const response = await fetch(`${BACKEND_URL}/recipes/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  });

  return response.json();
};

export default deleteRecipe;
