Describe: Place()

Test: "It should construct a place object"
Code: function Place(placeName, placeLandmark, placeRating) {
    this.placeName = placeName;
    this.placeLandmark = placeLandmark;
    this.placeRating = placeRating;
}
let bohol = new Place("Bohol", "Sunken Grave", "A");
Expected Output: bohol;
Place {placeName: "Bohol", placeLandmark: "Sunken Graves", placeRating: "A"}

Describe: PlacesBook() 

Test: "It should create new object that holds places"
Code: function PlacesBook(); {
    this.places = {};
}

Describe: PlacesBook.prototype.addPlace()
Test: "It should add a place object to places object within PlacesBook"
Code: PlacesBook.prototype.addPlace = function(place) {
    this.places[place.placeName] = place;
}
Expected Output: placeBook.addPlace(bohol);
placeBook;
PlacesBook {places: {…}}
places:{Bohol: Place}
[[Prototype]]
:Object

Describe: Assign ID

Test: "It should assign an Id to a place"
Code: PlacesBook.prototype.assignId = function() {
    this.currentId += 1
    return this.currentId;
};
Ex Out: Ids are assigned and go up by one per place