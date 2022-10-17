const URL = "https://coding-challenge-api.aerolab.co/products/";

const getData = () => {
    return fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzFjMzFjMDFmMWY0NTAwMjEwOTliNjAiLCJpYXQiOjE2NjI3OTIxMjl9.rNPq16e0LRduvU98shcQ8zKjKAqbOpAQKtH6oL_x10g",
      },
    }).then((res) => res.json())
  };

  export default getData;