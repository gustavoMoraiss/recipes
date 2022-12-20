import axios from "axios";

export const getRecipeList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: size || "20", tags },
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  return await axios.request(options);
};
