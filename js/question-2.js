const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=05c9c9cfd53f4ec1bff1b534eaa70355";
const cors = "https://noroffcors.herokuapp.com/";
const corsEnabledUrl = cors + url;

const gamesContainer = document.querySelector(".games");

async function makeApiCall() {
  try {
    const response = await fetch(corsEnabledUrl);

    const data = await response.json();

    const gameInfo = data.results;

    gamesContainer.innerHTML = "";

    for (let i = 0; i < gameInfo.length; i++) {
      if (i === 8) {
        break;
      }

      gamesContainer.innerHTML += `<div class="game"> <p> Name: ${gameInfo[i].name} </p><p>Rating: ${gameInfo[i].rating} </p><p> Tags: ${gameInfo[i].tags.length}</p></div>`;
    }
  } catch (error) {
    console.log("An error occurred");
    gamesContainer.innerHTML = displayError(
      "An error occurred when calling the API"
    );
  } finally {
    console.log("Finally");
  }
}

makeApiCall();
