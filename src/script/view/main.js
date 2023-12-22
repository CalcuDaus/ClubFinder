// import data source
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector("#searchElement");
  const buttonSearchElement = document.querySelector("#searchButtonElement");
  const clubListElement = document.querySelector("#clubList");

  const onButtonSearchClicked = () => {
    async function data(searchElement) {
      try {
        const results = await DataSource.searchClub(searchElement);
        clubListElement.innerHTML = "";
        results.forEach((club) => {
          const { name, fanArt, description } = club;

          const clubElement = document.createElement("div");
          clubElement.setAttribute("class", "club");

          clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                   <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                    </div>`;
          clubListElement.appendChild(clubElement);
        });
      } catch (rejected) {
        clubListElement.innerHTML = "";
    clubListElement.innerHTML += `<h2 class="placeholder">${rejected}</h2>`;

      }
    }
    // DataSource.searchClub(searchElement.value)
    //   .then((results) => {
    //     clubListElement.innerHTML = "";
    //     results.forEach((club) => {
    //       const { name, fanArt, description } = club;

    //       const clubElement = document.createElement("div");
    //       clubElement.setAttribute("class", "club");

    //       clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
    //         <div class="club-info">
    //           <h2>${name}</h2>
    //           <p>${description}</p>
    //           </div>`;
    //       clubListElement.appendChild(clubElement);
    //     });
    //   })
    //   .catch(fallbackResult);

    data(searchElement.value);
  };

  const renderResult = (results) => {
    clubListElement.innerHTML = "";
    results.forEach((club) => {
      const { name, fanArt, description } = club;

      const clubElement = document.createElement("div");
      clubElement.setAttribute("class", "club");

      clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        <div class="club-info"> 
          <h2>${name}</h2>
          <p>${description}</p>
          </div>`;
      clubListElement.appendChild(clubElement);
    });
  };

  const fallbackResult = (message) => {
    clubListElement.innerHTML = "";
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};


export default main;