import AppClass from "./appItem.js"

export const doApi = async () => {
  const query = new URLSearchParams(window.location.search);
  let searchFor = query.get("search") || "israel";
  let url = `https://restcountries.com/v3.1/name/${searchFor}`;
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  createList(data)
}

const createList = (_ar) => {
  _ar.forEach(item => {
    let app = new AppClass("#id_row", item);
    app.render();
  })
}

