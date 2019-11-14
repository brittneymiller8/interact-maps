var mymap = L.map('mapid').setView([40.736500, -73.999310], 13.49);

L.tileLayer('https://api.mapbox.com/styles/v1/brittneyjm8/ck2xiywv702jh1cpjl8n10v09/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJpdHRuZXlqbTgiLCJhIjoiY2syeGdzeXQwMGM4bzNnbjE4eDV0MnYxcSJ9.BfRJ6EfLRUXU5G9SqI9F5g', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(mymap);

let marker1 = L.marker([40.713009, -74.013168]).addTo(mymap);
let marker2 = L.marker([40.765282, -73.979462]).addTo(mymap);
let marker3 = L.marker([40.754380, -74.000610]).addTo(mymap);
let marker4 = L.marker([40.764790, -73.977798]).addTo(mymap);

marker1.bindPopup("<b>One World Trade Center</b><br> Height: 1,776 feet").openPopup();
marker2.bindPopup("<b>Central Park Tower</b><br>Height: 1,550 feet upon completion");
marker3.bindPopup("<b>30 Hudson Yards</b><br>Height: 1,268 feet");
marker4.bindPopup("<b>111 West 57th Street</b><br>Height: 1,428 feet");
