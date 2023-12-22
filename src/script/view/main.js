// import data source
import '../components/app-bar.js';
import '../components/search-bar.js';
import '../components/club-list.js';
import DataSource from "../data/data-source.js";

const main = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const clubListElement = document.createElement("club-list");


  // render app bar 
  const renderAppBar = ()=>{
    const appBarElement = document.createElement('app-bar');
    header.appendChild(appBarElement);
  }
  renderAppBar();

  // render search bar
  const renderSearchBar = ()=>{
    const searchBarElement = document.createElement('search-bar');
    main.appendChild(searchBarElement);
  }
  renderSearchBar();
  const searchElement = document.querySelector("#searchElement");
  const searchButtonElement = document.querySelector('#searchButtonElement');
  const onButtonSearchClicked = () => {
    async function data(searchElement) {
      try {
        clubListElement.innerHTML = "";
        const clubResults = await DataSource.searchClub(searchElement);
        clubListElement.clubs = clubResults;
        main.appendChild(clubListElement);
      } catch (rejected) {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder">${rejected}</h2>`;
        main.appendChild(clubListElement);
      }
    }
    data(searchElement.value);
  };
  searchButtonElement.addEventListener('click',()=>{onButtonSearchClicked();})
};

export default main;
