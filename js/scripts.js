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

// UI logic
let newPlace = new PlacesBook();
window.addEventListener("load", function() {
    let form = document.getElementById("form")

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        

        const placeInput = document.getElementById("places").value;
        const landmarkInput = document.getElementById("landmark").value;
        const ratingInput = document.getElementById("rating").value;

        let placeObj = new Place(placeInput, landmarkInput, ratingInput);
        newPlace.addPlace(placeObj)
        console.log(newPlace.places);

        //let output = newPlace.addPlace(placeObj);
        document.getElementById("output1").innerText = placeObj.placeName;
        document.getElementById("output2").innerText = placeObj.placeLandmark;
        document.getElementById("output3").innerText = placeObj.placeRating;

    })
})