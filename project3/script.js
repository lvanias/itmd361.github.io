function askQuestion() {
    alert('If you have questions, contact me at:\nlvanias@hawk.illinoistech.edu');
  };

  function reloadMap() {
    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: { lat: 51.508742, lng: -0.120850},
      zoom: 5
    });
  }

function expandMap() {
 document.getElementById("googleMap").classList.toggle("expanded");
}
document.getElementById("questionButton").addEventListener("click", askQuestion);
document.getElementById("reloadButton").addEventListener("click", reloadMap);
document.getElementById("expandButton").addEventListener("click", expandMap);