import Movie from "./movie.js";

const theFatherMovie = new Movie(
  "The Father 2020",
  "Drama",
  "Anthony Hopkins, Olivia Colman",
  "Having just scared off his recent caregiver, Anthony, an ailing, octogenarian Londoner gradually succumbing to dementia, feels abandoned when concerned Anne, his daughter, tells him she's moving to Paris. Confused and upset, against the backdrop of a warped perspective and his rapid, heart-rending mental decline, Anthony is starting to lose his grip on reality, struggling to navigate the opaque landscape of present and past. Now, as faded memories and glimpses of lucidity trigger sudden mood swings, dear ones, Anthony's surroundings, and even time itself become distorted. Why has his younger daughter stopped visiting? Who are the strangers that burst in on Anthony?",
  "Florian Zeller",
  "December 23, 2020",
  "1h 37min",
  "UK, France",
  "Anthony: I feel as if I'm losing my all leaves...",
  "English",
  "thefather.jpg",
);
const content = `
  
    <figure class="theFatherMovie__image">
      <img src=${theFatherMovie.image} alt="" width="950" height="auto"/>
    </figure>
    <h1 class="theFatherMovie__name">The Father Movie</h1>
    <ul class="theFatherMovie__features">
      <li class="packprop theFatherMovie__genre"><strong>Genre:</strong><span> ${
        theFatherMovie.genre
      }</span></li>
      <li class="packprop theFatherMovie__cast"><strong>Cast:</strong><span> ${
        theFatherMovie.cast
      }</span></li>
      <li class="packprop theFatherMovie__plotSummary"><strong>Storyline:</strong><span> ${
        theFatherMovie.plotSummary
      }</span></li>
      <li class="packprop theFatherMovie__director"><strong>Directors:</strong><span> ${
        theFatherMovie.director
      } inches</span></li>
      <li class="packprop theFatherMovie__releaseDate"><strong>Release Date:</strong><span> ${
        theFatherMovie.releasedDate
      } </span></li>
      <li class="packprop theFatherMovie__runtime"><strong>Runtime:</strong><span> ${
        theFatherMovie.runtime
      }</span></li>
      
      <li class="packprop theFatherMovie__countriesOfOrigin"><strong>Countries Of Origin:</strong><span> ${
        theFatherMovie.countriesOfOrigin
      }</span></li>
      <li class="packprop theFatherMovie__language"><strong>Language:</strong><span> ${
        theFatherMovie.language
      }</span></li>
      <li class="packprop theFatherMovie__quotes"><strong>Quotes:</strong><span> ${
        theFatherMovie.quotes
      }</span></li>
      <li class="theFatherMovie__age"><strong>Age:</strong><span> ${theFatherMovie.movieAge()} Days Old</span></li>
    </ul>
  
`;
const main = document.querySelector(".maincontent");
const newArticle = document.createElement("section");
newArticle.innerHTML = content;

main.append(newArticle);