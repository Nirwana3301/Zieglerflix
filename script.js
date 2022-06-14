import NetflixSlider from "./movieListSlider.js";

const getRandomNFromArray = (n, array) => {
  return array.sort(() => 0.5 - Math.random()).slice(0, n);
};

fetch("./data/backdrops.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const popular = getRandomNFromArray(15, data);
    NetflixSlider(".popular", popular);

    const mylist = getRandomNFromArray(15, data);
    NetflixSlider(".mylist", mylist);

    const watchagain = getRandomNFromArray(15, data);
    NetflixSlider(".watchagain", watchagain);

  })
  .catch((err) => {
  });
