const IMG_PATH = "../../images/"

const W = 1000;
const H = 500;
const W_SCREEN = 1500;

let setupData;

fetch("../config/setup/setup.json")
.then(response => {
   return response.json();
})
.then(jsondata => setupData = jsondata);

let category = "mario"