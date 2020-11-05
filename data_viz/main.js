
function getRandomColor() {
 return "#1D1D1B"
}

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// var canvas = document.getElementById('myCanvas0');
// 	var view = paper.setup(canvas);
// // var top_lat = -20000
// // var top_long = -20000
// // var least_lat = 2000
// // var least_long = 2000
// for (var i = allDays.length - 1; i >= 0; i--) {
// 	var day = allDays[i]

// 	// var color = getRandomColor();
// 	for (var x = day.length - 1; x >= 0; x--) {
// 		var walk = day[x];
// 		// var color = getRandomColor();
// 		var path = new paper.Path({
// 		    segments: [],
// 		    strokeColor: getRandomColor(),
// 		    strokeWidth: 1,
// 		    strokeCap: 'round',
// 		    selected: false
// 			})
// 		for (var j = walk.length - 1; j >= 0; j--) {
// 			var point = walk[j]
// 			var lat = point["Latitude"]
// 			var long = point["Longitude"]
// 			// if(lat < least_lat){
// 			// 	least_lat = lat;
// 			// }
// 			// if(lat > top_lat){
// 			// 	top_lat = lat;
// 			// }
// 			// if(long < least_long){
// 			// 	least_long = long;
// 			// }
// 			// if(long > top_long){
// 			// 	top_long = long;
// 			// }

// 		    var long1 = map(long, -74.0110411, -73.918373, 100, 2000);
// 			var lat1 = map(lat, 40.6702751, 41.0907576, 100, 3000);
// 			if (j == 0) {
// 				var text = new paper.PointText(new paper.Point(long1, lat1));
// 				text.justification = 'center';
// 				text.size = 10
// 				text.fillColor = 'black';
// 				text.content = point["Desc"];
// 			}
// 			path.add(new paper.Point(long1, lat1));
// 		}
// 	}

// }
// paper.view.draw()
// $(window).bind('keypress', function(e) {

//  var code = e.keyCode || e.which;
//  console.log(code)
//  if(code == 97) { //Enter keycode
//     var fileName = "custom.svg"
//      var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));
//      var link = document.createElement("a");
//      link.download = fileName;
//      link.href = url;
//      link.click();
//  }
// });
var days = ["9.25.18","9.26.18","9.27.18","9.28.18","9.29.18","9.30.18"]

 function initMap() {
 var overlay;
      USGSOverlay.prototype = new google.maps.OverlayView();
 	for (var i = allDays.length - 1; i >= 0; i--) {
 		day = allDays[i]


	var mapContainer = document.createElement('div');
	mapContainer.setAttribute('id','map' + i );
	var title = document.createElement('span');
	title.setAttribute('class','title')
	mapContainer.appendChild(title)
	$(title).text(days[i])

        for (var x = day.length - 1; x >= 0; x--) {

        	var path = day[x]
			var mapElement = document.createElement('div');
			mapElement.setAttribute('class','map-inner')
			mapElement.setAttribute('id', 'map' + i + 'inner'+x)
			var date = new Date(path[0]["Time"]);
			var hours = date.getHours();
			  var minutes = date.getMinutes();
			  var ampm = hours >= 12 ? 'pm' : 'am';
			  hours = hours % 12;
			  hours = hours ? hours : 12; // the hour '0' should be '12'
			  minutes = minutes < 10 ? '0'+minutes : minutes;
			  var strTime = hours + ':' + minutes + ' ' + ampm;
			var date2 = new Date(path[path.length-1]["Time"]);
			var hours2 = date2.getHours();
			  var minutes2 = date2.getMinutes();
			  var ampm2 = hours2 >= 12 ? 'pm' : 'am';
			  hours2 = hours2 % 12;
			  hours2 = hours2 ? hours2 : 12; // the hour '0' should be '12'
			  minutes2 = minutes2 < 10 ? '0'+ minutes2 : minutes2;
			  var strTime2 = hours2 + ':' + minutes2 + ' ' + ampm;



			mapElement.setAttribute('data-text', days[i] + " " + path[0]["Desc"])
			var map = new google.maps.Map(mapElement, {
          zoom: 16,
          styles: [
          {
        "stylers": [
          { "visibility": "simplified" },
          { "saturation": -100 }
        ]
      },
            {elementType: 'all', stylers: [{saturation: -100}, {saturation: -100}]},
            {
            "featureType" : "road",
            "stylers" : [{
                    		"visibility" : "off"
                		}
           			 ]
		       },

			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "rgba(255,255,255,0.2"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      },
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "stylers": [
			      {
			      	"visibility":"off",
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
				"featureType": "administrative.locality",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
				"featureType": "administrative.neighborhood",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
				"featureType": "administrative.province",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
			    "featureType": "poi",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#000"
			      },
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			  	"featureType": "poi.attraction",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			  	"featureType": "poi.business",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			    {
			  	"featureType": "poi.attraction",
			  	"elementType": "geometry",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			  	"featureType": "poi.business",
			  	"elementType": "geometry",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			      	opacity: 50,
			        "color": "rgba(255,255,255,0.2)"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dadada"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			      	"visibility": "off",
			        "color": "#c9c9c9"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text",
			    "stylers": [
			      {
			      	"visibility" : "off",
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			  	"featureType": "landscape",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  }

            ],
          center: {lat: path[15]["Latitude"], lng: path[15]["Longitude"]},
          mapTypeId: 'roadmap',
          gestureHandling: 'cooperative',
          disableDefaultUI: true
        });
// var mapLabel = new MapLabel({
//         text: strTime,
//         position: new google.maps.LatLng(path[0]["Latitude"], path[0]["Longitude"]),
//         map: map,
//         fontSize: 35,
//         align: 'right'
//     });

var stylez = [ {
        "stylers": [
          { "visibility": "simplified" },
          { "saturation": -100 }
        ]
      }, {
            "featureType" : "road",
            "stylers" : [{
                    		"visibility" : "on"
                		}
           			 ]
		       },
		       {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#DCDCDC'}]
            },
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "rgba(255,255,255,0.2"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      },
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "stylers": [
			      {
			      	"visibility": "off",
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
				"featureType": "administrative.locality",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
				"featureType": "administrative.neighborhood",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
				"featureType": "administrative.province",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
			    "featureType": "poi",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			    {
			  	"featureType": "poi.attraction",
			  	"elementType": "geometry",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			  	"featureType": "poi.business",
			  	"elementType": "geometry",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#000"
			      },
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			      	opacity: 50,
			        "color": "#DCDCDC"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#DCDCDC"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#c9c9c9",
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels",
			    "stylers": [
			      {
			      	"visibility":"off",
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			  	"featureType": "landscape",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			  },{
			    "featureType": "road.local",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  }
		    ];

		    var stylez2 = [ {
        "stylers": [
          { "visibility": "simplified" },
          { "saturation": -100 }
        ]
      }, {
            "featureType" : "road",
            "stylers" : [{
                    		"visibility" : "off"
                		}
           			 ]
		       },
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "rgba(255,255,255,0.2"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      },
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "stylers": [
			      {
			      	"visibility": "off",
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
				"featureType": "administrative.locality",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
				"featureType": "administrative.neighborhood",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
				"featureType": "administrative.province",
				"stylers": [
				   {"visibility": "off"}
				]
			  },
			  {
			    "featureType": "poi",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#000"
			      },
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			    {
			  	"featureType": "poi.attraction",
			  	"elementType": "geometry",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			  	"featureType": "poi.business",
			  	"elementType": "geometry",
			  	"stylers": [
					{"visibility": "off"}
			  	]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			      	"visibility": "off",
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			      	opacity: 50,
			        "color": "rgba(255,255,255,0.2)"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dadada"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			      	"visibility": "off",
			        "color": "#c9c9c9"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels",
			    "stylers": [
			      {
			      	"visibility": "off",
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			  	"featureType": "landscape",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			  }, {
			    "featureType": "road.local",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  }
		    ];
		  map.toggle = false;
		 google.maps.event.addListener(map, 'mouseover', function(event) {
          // 3 seconds after the cent
   //        if (this.toggle == true) {
			// this.setOptions({
		 //        styles : stylez2
		 //    });
		 //    this.toggle = false;
   //        }else{
			this.setOptions({
		        styles : stylez
		    });

		 //    this.toggle = true;
   //        }

        });
		 $(mapElement).on('mouseover', function(){
		 	 console.log($(mapElement))

		    $('.tooltip').text($(this).attr('data-text'));
		 	$('.tooltip').addClass('open');
		 	$('.map-inner').addClass('blur')
		 	$('p').addClass('blur')
		 	$('.title').addClass('blur')
		 	$(this).removeClass('blur')
		 })
		 $(mapElement).on('mouseout', function(){
			$('.blur').removeClass('blur')
		    $('.tooltip').text($(this).attr('data-text'));
		 	$('.tooltip').removeClass('open');
		 })
		 	 google.maps.event.addListener(map, 'mouseout', function(event) {
          // 3 seconds after the cent
   //        if (this.toggle == true) {
			// this.setOptions({
		 //        styles : stylez2
		 //    });
		 //    this.toggle = false;
   //        }else{
			this.setOptions({
		        styles : stylez2
		    });
		    $('.tooltip').removeClass('open');
		 //    this.toggle = true;
   //        }

        });

        	var flightPlanCoordinates = [];
	        for (var j = 0; j <= path.length - 1; j++) {
	        	var point = path[j]
				flightPlanCoordinates.push({lat: point["Latitude"], lng: point["Longitude"]})
	        }
	        // var lineSymbol = {
	        //   path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
	        //   scale: 2,
	        //   strokeColor: '#fff',
	        //   fillColor: "#000"
	        // };
	        var lineSymbol = {
			  path: 'M 0,-0.05 0,0.05',
			  strokeOpacity: 1,
			  strokeWidth:1,
			  scale: 4
			};

			var flightPath = new google.maps.Polyline({
	          path: flightPlanCoordinates,
	          strokeColor:getRandomColor(),
	          strokeOpacity: 0,
	          strokeWeight: 2,
	          icons: [{
			    icon: lineSymbol,
			    offset: '0',
			    repeat: '10px'
			  }]

	        });
	         animateCircle(flightPath);
			 function animateCircle(line) {
	          var count = 1;
	          window.setInterval(function() {
	            count = (count + 1) % 200;

	            var icons = line.get('icons');
	            icons[0].offset = (count / 2) + '%';
	            line.set('icons', icons);
	        }, 20);
	      }
			var bounds = new google.maps.LatLngBounds();
			for (var q = 0; q < flightPlanCoordinates.length; q++) {
			  bounds.extend(flightPlanCoordinates[q]);
			}
			map.fitBounds(bounds);
			var srcImage = [strTime, strTime2];
			var mapBounds;

	        // The custom USGSOverlay object contains the USGS image,
	        // the bounds of the image, and a reference to the map.

	        overlay = new USGSOverlay([{"latitude": path[0]["Latitude"], "longitude": path[0]["Longitude"]},{"latitude": path[path.length-1]["Latitude"], "longitude": path[path.length-1]["Longitude"]}], srcImage, mapBounds, map);
   console.log(strTime2)
	        flightPath.setMap(map);
	        document.body.appendChild(mapElement);
	        //mapContainer.appendChild(mapElement);
	        }




 	}
function USGSOverlay(bounds, image, bounds2, map) {

        // Initialize all properties.
        this.bounds_ = bounds;
        this.image_ = image;
        this.map_ = map;
		this.bounds2_ = bounds2
        // Define a property to hold the image's div. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.div_ = null;

        // Explicitly call setMap on this overlay.
        this.setMap(map);
      }

      USGSOverlay.prototype.onAdd = function() {

        var div = document.createElement('div');
        div.style.borderStyle = 'none';
        div.style.borderWidth = '0px';
        div.style.position = 'absolute';

        var div2 = document.createElement('div');
        div2.style.borderStyle = 'none';
        div2.style.borderWidth = '0px';
        div2.style.position = 'absolute';


		var div3 = document.createElement('div');
        div3.style.borderStyle = 'none';
        div3.style.borderWidth = '0px';
        div3.style.position = 'absolute';


        div3.setAttribute('class','blur-div')
        // Create the img element and attach it to the div.
        var img = document.createElement('span');
        img.innerHTML = this.image_[0];
        img.setAttribute('class','time-label')
        // img.style.width = '100%';
        // img.style.height = '100%';
        img.style.position = 'absolute';
        div.appendChild(img);


		 // Create the img element and attach it to the div.
        var img2 = document.createElement('span');
        img2.innerHTML = this.image_[1];

        img2.setAttribute('class','time-label')
        // img.style.width = '100%';
        // img.style.height = '100%';
        img2.style.position = 'absolute';
        div2.appendChild(img2);

        this.div_ = div;
        this.div2_ = div2;
        this.div3_ = div3;

        // Add the element to the "overlayLayer" pane.
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(div);
        panes.overlayLayer.appendChild(div2);
        panes.overlayLayer.appendChild(div3);
      };

      USGSOverlay.prototype.draw = function() {

        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        // Retrieve the south-west and north-east coordinates of this overlay
        // in LatLngs and convert them to pixel coordinates.
        // We'll use these coordinates to resize the div.
        var sw = overlayProjection.fromLatLngToDivPixel(new google.maps.LatLng(this.bounds_[0]["latitude"], this.bounds_[0]["longitude"]));
        var nw = overlayProjection.fromLatLngToDivPixel(new google.maps.LatLng(this.bounds_[1]["latitude"], this.bounds_[1]["longitude"]));
        // var ne = overlayProjection.fromLatLngToDivPixel();
		// var sw2 = overlayProjection.fromLatLngToDivPixel(this.bounds2_.getSouthWest());
  //       var ne2 = overlayProjection.fromLatLngToDivPixel(this.bounds2_.getNorthEast());

        // Resize the image's div to fit the indicated dimensions.
        var div = this.div_;
        div.style.left = (sw.x - 20) + 'px';
        div.style.top = (sw.y - 10) + 'px';
        div.style.backgroundColor = '#1D1D1B'

        var div2 = this.div2_;
        div2.style.left = (nw.x - 10) + 'px';
        div2.style.top = (nw.y - 10) + 'px';
        div2.style.backgroundColor = '#1D1D1B'

        var div3 = this.div3_;

		// div3.style.left = sw2.x + 'px';
  //       div3.style.top = ne2.y + 'px';
  //       div3.style.width = (sw2.y - ne2.y)  + 'px';
  //       div3.style.height = (sw2.y - ne2.y)  + 'px';
        // // div.style.width = (ne.x - sw.x) + 'px';
        // div.style.height = (sw.y - ne.y) + 'px';
      };

      // The onRemove() method will be called automatically from the API if
      // we ever set the overlay's map property to 'null'.
      USGSOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
      };


        // var map = new google.maps.Map(document.getElementById('map'), {
        //   zoom: 40,
        //   center: {lat: allDays[0][0][1]["Latitude"], lng: allDays[0][0][1]["Longitude"]},
        //   mapTypeId: 'terrain'
        // });

   //      var flightPlanCoordinates = [];
   //      for (var i = allDays[0][0].length - 1; i >= 0; i--) {
   //      	var point = allDays[0][0][i]
			// flightPlanCoordinates.push({lat: point["Latitude"], lng: point["Longitude"]})
   //      }

        // var flightPlanCoordinates = [
        //   {lat: allDays[0][0][0]["Latitude"], lng: allDays[0][0][0]["Longitude"]},
        //   {lat: allDays[0][0][1]["Latitude"], lng: allDays[0][0][1]["Longitude"]},
        //   {lat: allDays[0][0][2]["Latitude"], lng: allDays[0][0][2]["Longitude"]},
        //   {lat: allDays[0][0][3]["Latitude"], lng: allDays[0][0][3]["Longitude"]}
        // ];
 var moonMapType = new google.maps.ImageMapType({
          getTileUrl: function(coord, zoom) {

          },
          tileSize: new google.maps.Size(256, 256),
          maxZoom: 9,
          minZoom: 0,
          radius: 1738000,
          name: 'Moon'
        });
// map.mapTypes.set('moon', moonMapType);
// map.setMapTypeId('moon');
      }
function getNormalizedCoord(coord, zoom) {
        var y = coord.y;
        var x = coord.x;

        // tile range in one direction range is dependent on zoom level
        // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
        var tileRange = 1 << zoom;

        // don't repeat across y-axis (vertically)
        if (y < 0 || y >= tileRange) {
          return null;
        }

        // repeat across x-axis
        if (x < 0 || x >= tileRange) {
          x = (x % tileRange + tileRange) % tileRange;
        }

        return {x: x, y: y};
      }

function encode_as_img_and_link(){
 // Add some critical information
 $("svg").attr({ version: '1.1' , xmlns:"http://www.w3.org/2000/svg"});

 var svg = $("#myMap0 canvas").html();
 var b64 = Base64.encode(svg); // or use btoa if supported

 // Works in recent Webkit(Chrome)
 $("body").append($("<img src='data:image/svg+xml;base64,\n"+b64+"' alt='file.svg'/>"));

 // Works in Firefox 3.6 and Webit and possibly any browser which supports the data-uri
 $("body").append($("<a href-lang='image/svg+xml' href='data:image/svg+xml;base64,\n"+b64+"' title='file.svg'>Download</a>"));
}

// console.log( top_lat, top_long, least_lat, least_long);
//41.0907576 -73.918373 40.6702751 -74.0110411

// var lat = one_point["Latitude"]
// var long = one_point["Longitude"]
// var long1 = map(long, -73.9971426, -73.9462922, 1, 2000);
// var lat1 = map(lat, 40.6751166, 40.7739989, 1, 2000);
// path.add(new paper.Point(lat1, long1));