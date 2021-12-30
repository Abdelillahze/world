let country = [];
async function get() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  data.splice(data.indexOf(data.find((e) => e.name.common == "Israel")), 1);
  data.forEach((e) =>
    country.push({
      name: e.name.common,
      population: e.population,
      region: e.region,
      img: e.flags.png,
      languages: Object.values(e.languages || "none"),
    })
  );

  let parent = document.querySelector(".grid");
  function createEl(name, pop, region, src, lang) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let text = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let p2 = p.cloneNode();
    let p3 = p.cloneNode();
    let span = document.createElement("span");
    let span2 = span.cloneNode();
    let span3 = span.cloneNode();
    card.classList.add("card");
    text.classList.add("text");
    img.src = src;
    parent.appendChild(card);
    card.appendChild(img);
    card.appendChild(text);
    text.appendChild(h1);
    text.appendChild(p);
    text.appendChild(p2);
    text.appendChild(p3);
    h1.appendChild(document.createTextNode(name));
    span.appendChild(document.createTextNode(pop));
    span2.appendChild(document.createTextNode(region));
    span3.appendChild(document.createTextNode(lang));
    p.appendChild(document.createTextNode("Population: "));
    p2.appendChild(document.createTextNode("Region: "));
    p3.appendChild(document.createTextNode("languages: "));
    p.appendChild(span);
    p2.appendChild(span2);
    p3.appendChild(span3);
  }

  for (let i = 0; i < country.length; i++) {
    createEl(
      country[i].name,
      country[i].population,
      country[i].region,
      country[i].img,
      country[i].languages
    );
  }
}

get();

let btn = document.querySelector(".switch");
let html = document.querySelector("html");

btn.onclick = () => {
  html.getAttribute("data-theme") == "dark"
    ? html.setAttribute("data-theme", "light")
    : html.setAttribute("data-theme", "dark");
};
