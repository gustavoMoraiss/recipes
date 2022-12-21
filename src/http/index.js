import axios from "axios";

export const getRecipeList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: size || "20", tags },
    headers: {
      "X-RapidAPI-Key": "a25f988395msh0c376f2c210c955p139f81jsn2f5570339d90",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
