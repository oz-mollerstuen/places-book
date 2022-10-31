//Business Logic for PlacesBook
function PlacesBook() {
    this.places = {};
    this.currentId = 0;
}

PlacesBook.prototype.assignId = function() {
    this.currentId += 1
    return this.currentId;
}

PlacesBook.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places[place.id] = place;
};

//Business Logic for Place
function Place(placeName, placeLandmark, placeRating) {
    this.placeName = placeName;
    this.placeLandmark = placeLandmark;
    this.placeRating = placeRating;
}