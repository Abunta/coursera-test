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

function search(){
    var text = document.getElementById("inField").value;
    showMarker(text);
}

function showMarker(searchText){
    for(var i = 0; i<4; i++){

        infowindow[i].close();
        if(markers[i].title==searchText){
            infowindow[i].open(map, markers[i]);
        }
    }
}

function initMap() {



    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 57.0442, lng: 9.9116},
        zoom: 6
    });
    positions[0] = new google.maps.LatLng(57.0442, 9.9116);
    positions[1] = new google.maps.LatLng(58.0442, 10.9116);
    positions[2] = new google.maps.LatLng(59.0442, 9.9116);
    positions[3] = new google.maps.LatLng(56.0442, 11.9116);

    pictures[0] = '<img src="kotomatrix_10.jpg" height="200px">';
    pictures[1] = '<img src="kotiki-simpatichnye-zabavnye-kartinki-koshki-sobaki-smeshnye-zhivotnye-kote_676581157.jpg" height="200px">';
    pictures[2] = '<img src="maxresdefault (1).jpg" height="200px">';
    pictures[3] = '<img src="maxresdefault.jpg" height="200px">';

    //positions[4] = new google.maps.LatLng(55.0442, 13.9116);
    //positions[5] = new google.maps.LatLng(57.1442, 12.9116);
    //positions[6] = new google.maps.LatLng(58.2442, 10.9116);
    //positions[7] = new google.maps.LatLng(59.3442, 10.9116);
    //positions[8] = new google.maps.LatLng(56.4442, 10.9116);
    //positions[9] = new google.maps.LatLng(55.5442, 13.9116);

    for(var i=0; i<4; i++) {
        markers[i]= new google.maps.Marker({
            position: positions[i],
            map: map,
            title: "title"+i
        });
    }
    var str1 = '<div id="content">'+
        '<div id="siteNotice">'+
            '<p>Some title</p>'+
        '</div>'+
        '<div id="bodyContent">';
    var str2 = '</div>'+ '</div>';
    for(var i=0; i<4; i++) {
        contentString[i] = str1 + pictures[i] + str2;
        infowindow[i] = new google.maps.InfoWindow({
            content: contentString[i]
        });
    }

    for(var i=0; i<4; i++) {
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
