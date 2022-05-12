//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTVShows {
  constructor(title, genre, rating, numOfEp) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.numOfEp - numOfEp;
  }
  play() {
    console.log(`playing`);
  }
  stop() {
    console.log(`stopping...`);
  }
  saveToList() {
    console.log("save to list");
  }
}

let bridgerton = new MakeNetflixTVShows(
  "Bridgerton",
  "Period Romantic Drama",
  "99%",
  16
);
