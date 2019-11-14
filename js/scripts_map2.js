var mymap2 = L.map('mapid2').setView([27.943, -81.956], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/brittneyjm8/ck2y4e2w0047x1cpfvg78kp4d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpdHRuZXlqbTgiLCJhIjoiY2syeGdzeXQwMGM4bzNnbjE4eDV0MnYxcSJ9.BfRJ6EfLRUXU5G9SqI9F5g', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap2);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( 'At ' + places[i].placeName + ', there has/have been ' + places[i].descrip +'.')
  .addTo(mymap2);
}
