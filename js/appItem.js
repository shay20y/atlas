export default class AppClass {
    constructor(_parent, _item, _border) {
        this.parent = _parent;
        this.border = _border;
        this.name = (_item.name.common).toUpperCase();
        this.pop = (_item.population).toLocaleString();
        this.region = _item.continents;
        this.languages = _item.languages;
        this.coin = _item.currencies;
        this.capital = _item.capital;
        this.flag = _item.flags.png;
        this.borders = _item.borders;
        this.googleMap = _item.maps.googleMaps;
        this.map = _item.latlng;


    }


    render() {

        let div = document.createElement("div");
        // div.className = "p-3";
        div.style.minHeight = "100vh"
        document.querySelector(this.parent).append(div);

        let bordersList = "";
        for (let i = 0; i < this.border.length; i++) {
            bordersList += `<a href="/index.html?search=${this.border[i]}">${this.border[i]}</a>`;
            if (i < this.border.length - 1) {
                bordersList += " , ";
            }
        }
        
        // console.log(this.capital);    

        let coinList = "";
        for (let key in this.coin) {
            coinList += `${this.coin[key].name} , (${this.coin[key].symbol})`;
        }

        // console.log(coinList);
        

        let languages = "";
        for (const key in this.languages) {
            languages += ` ${key.toUpperCase()} : ${this.languages[key]} | `;
        }

        // console.log(languages);

        div.innerHTML = `
        <h1 class="text-center border-bottom border-3 border-light ">${this.name}</h1>
        <div class="row row1 d-flex justify-content-between col-12">

            <div class="col-auto"><img src="${this.flag}" alt=""></div>

            <div class="bio text-center col-md-4 ">
                <h3>${this.name}</h3>
                <div>POP: ${this.pop}</div>
                <div>Region: ${this.region}</div>
                <div>Languages: ${languages}</div>
                <div>Coin: ${coinList} </div>
                <div>Capital: ${ this.capital ? this.capital : 'No capital city'}</div>
                <div><a target="_blank" href="${this.googleMap}">link to google maps</a></div>
            </div>

            <div class="bio col-md-4 p-2 text-center">
                <h3>States with border</h3>
                ${bordersList}
                <h4></h4>
            </div>

        </div>

        <div class="row row2 d-flex col-12">


            <div class=" googleMaps">
                <iframe src="https://maps.google.com/maps?q=${this.map}&z=5&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </div>
      `
    }


}
