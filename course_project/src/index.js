/**
 * Created by Alexander on 02/12/2016.
 */
var map;
var flag=0;

var positions =[];
var markers= [];
var  pictures=[];
var contentString=[];
var infowindow=[];
var title=[];
var str1=[];


function search(){
    var text = document.getElementById("inField").value;
    showMarker(text);
}

function showMarker(searchText){
    for(var i = 0; i<5; i++){

        infowindow[i].close();
        if(markers[i].title==searchText){
            infowindow[i].open(map, markers[i]);
        }
    }
}

function initMap() {



    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.90570183, lng: 27.55590364},
        zoom: 12
    });
    positions[0] = new google.maps.LatLng(53.90854123, 27.57483333);
    positions[1] = new google.maps.LatLng(53.90570183, 27.55590364);
    positions[2] = new google.maps.LatLng(53.91185915, 27.55084634);
    positions[3] = new google.maps.LatLng(53.936161, 27.4819987);
    positions[4] = new google.maps.LatLng(53.89184336, 27.5517717);

    pictures[0] = '<img src="square.jpg" height="300px">';
    pictures[1] = '<img src="church.png" height="300px">';
    pictures[2] = '<img src="nemiga.jpeg" height="300px">';
    pictures[3] = '<img src="arena.jpg" height="300px">';
    pictures[4] = '<img src="vokzal.jpg" height="300px">';

    title[0] = "square";
    title[1] = "church";
    title[2] = "nemiga";
    title[3] = "arena";
    title[4] = "vokzal";

    for(var i=0; i<5; i++) {
        markers[i]= new google.maps.Marker({
            position: positions[i],
            map: map,
            title: title[i]
        });
    }
    var str0 = '<div id="content">'+
        '<div id="siteNotice">';
    str1[0] = '<p>square</p>';
    str1[1] = '<p>church</p>';
    str1[2] = '<p>nemiga</p>';
    str1[3] = '<p>arena</p>';
    str1[4] = '<p>vokzal</p>';
    var str12 = '</div>'+
        '<div id="bodyContent">';
    var str2 = '</div>'+ '</div>';
    for(var i=0; i<5; i++) {
        contentString[i] = str0 + str1[i] + str12 + pictures[i] + str2;
        infowindow[i] = new google.maps.InfoWindow({
            content: contentString[i]
        });
    }

    for(var i=0; i<5; i++) {
        google.maps.event.addListener(markers[i], 'click', random1(i));
    }
    function random1(i) {
        return function(){
            infowindow[flag].close();
            infowindow[i].open(map, markers[i]);
            flag=i;
        };
    }
}
