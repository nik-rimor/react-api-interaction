import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID bBDpreP-OTJe0y4fBx3q6S0Sv2dbZsyGqq7NCIQEifE",
    },
    params: {
      query: term,
    },
  });
  console.log(response.data?.results);
  return response;
};

export default searchImages;
