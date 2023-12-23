// import data source
import '../components/search-bar.js';
import '../components/club-list.js';
import DataSource from "../data/data-source.js";

const main = () => {
  const clubListElement = document.querySelector("club-list");
  const searchElement = document.querySelector("search-bar");

  const onButtonSearchClicked = () => {
    async function data(searchElement) {
      try {
        const clubResults = await DataSource.searchClub(searchElement);
        clubListElement.clubs = clubResults;
      } catch (rejected) {
        clubListElement.renderError(rejected);
      }
    }
    data(searchElement.value);
  };
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
