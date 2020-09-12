import { BACKEND_URL } from "@env";

const getAllRecipes = async (email, password) => {
  const response = await fetch(`${BACKEND_URL}/recipes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default getAllRecipes;
