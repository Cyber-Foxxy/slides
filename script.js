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
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Alcatraz_Occupation.jpg",
  "Native American activists from the group Indians of All Tribes occupied Alcatraz Island to protest broken treaties and the long history of federal mistreatment. The action became a defining moment in the Red Power movement. It demanded sovereignty, cultural respect, and an end to racist federal policies.",
  "Ilka Hartmann",
  1969
);

let slide2 = new JusticeSlide(
  "Wounded Knee Occupation",
  "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wounded_Knee_1973.jpg",
  "Members of the American Indian Movement (AIM) occupied Wounded Knee to protest corruption, treaty violations, and systemic racism against the Oglala Lakota. The standoff drew national attention to Indigenous civil rights struggles. It highlighted how historical trauma and modern injustice remain deeply connected.",
  "Unknown (Press Photograph)",
  "1973 approx."
);

let slide3 = new JusticeSlide(
  "Standing Rock Water Protectors",
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/Standing_Rock_2016.jpg",
  "Indigenous water protectors and allies gathered to oppose the Dakota Access Pipeline, defending the Missouri River and sacred lands. The movement became a global symbol of environmental justice and Indigenous sovereignty. It confronted racism embedded in land use, resource extraction, and government decision-making.",
  "Rob Wilson / CC BY-SA",
  2016
);
let slide4 = new JusticeSlide(
  "Idle No More Round Dance",
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Idle_No_More_Ottawa.jpg",
  "Indigenous activists participate in a round dance flash mob as part of the Idle No More movement, which began in Canada and spread internationally. The movement protests discriminatory legislation and environmental destruction. The round dance symbolizes unity, cultural pride, and peaceful resistance to racism.",
  "Obert Madondo / CC BY-NC-SA",
  2012
);
let slide5 = new JusticeSlide(
  "Native American Voting Rights Rally",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Native_Vote_Rally.jpg",
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

  // Optional polish: avoid repeating the same slide
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
