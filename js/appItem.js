export default class AppClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.pop = (_item.population).toLocaleString();
        this.region = _item.continents;
        this.languages = _item.languages;
        this.coin = _item.currencies;
        this.capital = _item.capital;
        this.flag = _item.flags.png;
        this.borders = _item.borders;
        this.googleMap = _item.maps.googleMaps;
        this.map = _item.capitalInfo.latlng;


    }


    render() {

        let div = document.createElement("div");
        div.className = "p-3";
        div.style.minHeight = "100vh"
        document.querySelector(this.parent).append(div);

        let bordersList = "";
        for (let i = 0; i < this.borders.length; i++) {
            bordersList += `<a href="/index.html?search=${this.borders[i]}">${this.borders[i]}</a>`;
            if (i < this.borders.length - 1) {
                bordersList += " , ";
            }
        }

        let coinList = "";
        for (let key in this.coin) {
            coinList += `${this.coin[key].name} (${this.coin[key].symbol})`;
        }

        let languages = "";
        for (const key in this.languages) {
            languages += ` | ${key}: ${this.languages[key]} | `;
        }
        

        div.innerHTML = `
      <h1 class="text-center border-bottom ">${this.name}</h1>
      <div class="row row1 d-flex col-12">

          <div class="col-md-6"><img class="col-8" src="${this.flag}" 
          alt=""></div>

          <div class="bio col-md-6 p-4">
              <h3>${this.name}</h3>
              <div>POP: ${this.pop}</div>
              <div>region: ${this.region}</div>
              <div>Languages: ${languages}</div>
              <div>Coin: ${coinList} </div>
              <div>Capital: ${this.capital}</div>
              <div><a target="_blank" href="${this.googleMap}">link to google maps</a></div>
          </div>


      </div>

      <div class="row row2 d-flex col-12">

          <div class="bio col-md-6 p-4">
              <h3>States with border</h3>
                ${bordersList}
                <h4></h4>
          </div>

          <div class="col-md-6">
              <iframe src="https://maps.google.com/maps?q=${this.map}&z=5&ie=UTF8&iwloc=&output=embed"
                  width="100%" height="200%" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
      `
    }


}
