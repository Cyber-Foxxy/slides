// ----- CLASS -----
class JusticeSlide {
  constructor(title, image, description, author, year) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.author = author;
    this.year = year;
  }
}

// ----- OBJECTS -----

let slide1 = new JusticeSlide(
  "Occupation of Alcatraz",
  "https://news.berkeley.edu/wp-content/uploads/2022/11/occupation-of-alcatraz-02-1200.jpg",
  "Native American activists from the group Indians of All Tribes occupied Alcatraz Island to protest broken treaties and the long history of federal mistreatment. The action became a defining moment in the Red Power movement. It demanded sovereignty, cultural respect, and an end to racist federal policies.",
  "Ilka Hartmann",
  1969
);

let slide2 = new JusticeSlide(
  "Wounded Knee Occupation",
  "https://oe1.orf.at/i/intro/26/de/26dead36d3802bd006ff8949409fa183b350ed9b.jpg",
  "Members of the American Indian Movement (AIM) occupied Wounded Knee to protest corruption, treaty violations, and systemic racism against the Oglala Lakota. The standoff drew national attention to Indigenous civil rights struggles. It highlighted how historical trauma and modern injustice remain deeply connected.",
  "Unknown (Press Photograph)",
  "1973 approx."
);

let slide3 = new JusticeSlide(
  "Standing Rock Water Protectors",
  "https://www.exposedbycmd.org/wp-content/uploads/2025/02/standing-rock-water-protectors-900x508.jpeg",
  "Indigenous water protectors and allies gathered to oppose the Dakota Access Pipeline, defending the Missouri River and sacred lands. The movement became a global symbol of environmental justice and Indigenous sovereignty. It confronted racism embedded in land use, resource extraction, and government decision-making.",
  "Rob Wilson / CC BY-SA",
  2016
);

let slide4 = new JusticeSlide(
  "Idle No More Round Dance",
  "https://www.powwows.com/wp-content/uploads/idle-no-more-flash-mob-round-dance.jpg",
  "Indigenous activists participate in a round dance flash mob as part of the Idle No More movement, which began in Canada and spread internationally. The movement protests discriminatory legislation and environmental destruction. The round dance symbolizes unity, cultural pride, and peaceful resistance to racism.",
  "Obert Madondo / CC BY-NC-SA",
  2012
);

let slide5 = new JusticeSlide(
  "Native American Voting Rights Rally",
  "https://imgix.bustle.com/uploads/getty/2018/10/25/9b5c71a5-705d-4cf4-bc62-a1bb19ae95bb-getty-651459080.jpg?w=1100&q=50&dpr=2",
  "Indigenous community members gather to advocate for equal access to voting, challenging voter suppression that disproportionately affects Native populations. The rally highlights the ongoing fight for political representation and civil rights. It underscores how racism continues to shape access to democratic participation.",
  "Native Vote / CC License",
  "2018 approx."
);

// ----- ARRAY -----
let slides = [slide1, slide2, slide3, slide4, slide5];

// ----- DOM ELEMENTS -----
const imgEl = document.getElementById("slideImage");
const titleEl = document.getElementById("slideTitle");
const descEl = document.getElementById("slideDescription");
const authorEl = document.getElementById("slideAuthor");
const yearEl = document.getElementById("slideYear");

let lastIndex = -1;

// ----- RANDOM SLIDE FUNCTION -----
function showRandomSlide() {
  let index = Math.floor(Math.random() * slides.length);

  while (index === lastIndex) {
    index = Math.floor(Math.random() * slides.length);
  }
  lastIndex = index;

  let s = slides[index];

  imgEl.src = s.image;
  titleEl.textContent = s.title;
  descEl.textContent = s.description;
  authorEl.textContent = "Author: " + s.author;
  yearEl.textContent = "Year: " + s.year;
}

// ----- BUTTON EVENT -----
document.getElementById("nextBtn").addEventListener("click", showRandomSlide);

// Show one slide on load
showRandomSlide();
