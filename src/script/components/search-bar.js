class SearchBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <input placeholder="Search football club" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
        `
    }
}

customElements.define("search-bar",SearchBar);