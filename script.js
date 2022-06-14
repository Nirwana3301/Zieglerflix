import NetflixSlider from "./movieListSlider.js";

const getRandomNFromArray = (n, array) => {
  return array.sort(() => 0.5 - Math.random()).slice(0, n);
};

// Replace ./data.json with your JSON feed
fetch("./data/backdrops.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const stuff = getRandomNFromArray(15, data);
    console.log(stuff);
    NetflixSlider(".popular", stuff);
  })
  .catch((err) => {
    // Do something for an error here
  });
