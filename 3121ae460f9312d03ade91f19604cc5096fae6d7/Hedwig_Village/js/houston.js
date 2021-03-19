//function to instantiate the Leaflet map
function createMap(){
  //create the map
  mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaGlkaWxpcHNvbnRha2tlIiwiYSI6ImNqY3FucHJ4azAzNXgzM3MwbGRvM3M2YWsifQ.Mwh9X4xZhkSBBCTfBlZHEQ';
  
  //SW coordinate, NE coordinate boundaries
  var bounds = [[-95.5315723, 29.7732116], [-95.5018849, 29.7839497]];

  //var bounds = [[-95.540083, 29.773145], [-95.538056, 29.773164]];

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nishidilipsontakke/cjuhnd62s559x1fqmt6kccmfe',
    center: [-95.5212726, 29.7812737],
    zoom: 1,
    maxBounds: bounds
});

//Navigation controls added
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-left');

map.on("load", function() {
  /* Image: An image is loaded and added to the map. */
  map.loadImage("images/trail.png", function(error, image) {
    
  if (error) throw error;
  map.addImage("custom-marker", image);
  /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
  map.addLayer({
  id: "baseCamp",
  type: "symbol",
  /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
  source: {
  type: "geojson",
  data: {
  type: 'FeatureCollection',
  features: [
  {
  type: 'Feature',
  properties: {},
  geometry: {
  type: "Point",
  coordinates: [-95.506129, 29.772158]
  }
  }
  ]
  }
  },
  layout: {
  "icon-image": "custom-marker",
  }
  });
  map.addLayer({
    id: "camp1",
    type: "symbol",
    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
    source: {
    type: "geojson",
    data: {
    type: 'FeatureCollection',
    features: [
    {
    type: 'Feature',
    properties: {},
    geometry: {
    type: "Point",
    coordinates: [-95.506096, 29.771619]
    }
    }
    ]
    }
    },
    layout: {
    "icon-image": "custom-marker",
    }
    });

    map.addLayer({
      id: "camp2",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
      type: "geojson",
      data: {
      type: 'FeatureCollection',
      features: [
      {
      type: 'Feature',
      properties: {},
      geometry: {
      type: "Point",
      coordinates: [-95.505773, 29.768197]
      }
      }
      ]
      }
      },
      layout: {
      "icon-image": "custom-marker",
      }
    });
    
    map.addLayer({
      id: "camp3",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
      type: "geojson",
      data: {
      type: 'FeatureCollection',
      features: [
      {
      type: 'Feature',
      properties: {},
      geometry: {
      type: "Point",
      coordinates: [-95.505835, 29.767540]
      }
      }
      ]
      }
      },
      layout: {
      "icon-image": "custom-marker",
      }
    });
    
    map.addLayer({
      id: "camp4",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
      type: "geojson",
      data: {
      type: 'FeatureCollection',
      features: [
      {
      type: 'Feature',
      properties: {},
      geometry: {
      type: "Point",
      coordinates: [-95.502336, 29.767110]
      }
      }
      ]
      }
      },
      layout: {
      "icon-image": "custom-marker",
      }
    });

    map.addLayer({
      id: "camp5",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
      type: "geojson",
      data: {
      type: 'FeatureCollection',
      features: [
      {
      type: 'Feature',
      properties: {},
      geometry: {
      type: "Point",
      coordinates: [-95.503040, 29.766614]
      }
      }
      ]
      }
      },
      layout: {
      "icon-image": "custom-marker",
      }
    });

    map.addLayer({
      id: "camp6",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
      type: "geojson",
      data: {
      type: 'FeatureCollection',
      features: [
      {
      type: 'Feature',
      properties: {},
      geometry: {
      type: "Point",
      coordinates: [-95.499569, 29.781060]
      }
      }
      ]
      }
      },
      layout: {
      "icon-image": "custom-marker",
      }
    });

    map.addLayer({
      id: "camp7",
      type: "symbol",
      /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
      source: {
      type: "geojson",
      data: {
      type: 'FeatureCollection',
      features: [
      {
      type: 'Feature',
      properties: {},
      geometry: {
      type: "Point",
      coordinates: [-95.499423, 29.780452]
      }
      }
      ]
      }
      },
      layout: {
      "icon-image": "custom-marker",
      }
    });
  });
});

var popup = new mapboxgl.Popup({
  offset: 5,
  closeOnClick: false
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'baseCamp', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
  //var detailsHtmlLines = [];
  //var coordinates = e.features[0].geometry.coordinates.slice();
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
  
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("Base Camp");
  //detailsHtmlLines.push("<img src=\"images/trail1_1.png\" width=\"200px\" height=\"150px\">");

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail1.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Hunters Park Ln to Bridgewood St")
    .addTo(map);

  // //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail1_1.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = div.innerHTML = '<span style="color:#1499ff">17,600 ft (5,380 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = '11% (21% at Sea Level)';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '11,435 ft (3,485 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = 'You are here!';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Located near Bunker Hill Elementary School; connects Taylorcrest Rd to Taylorcrest Ct';
  
  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';
  // //console.log(route.features[0].geometry.coordinates[counter]);
  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.85719586641274, 28.00647209182954])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
  //   //.togglePopup();
});

// map.on('mouseout', 'baseCamp', function (e) {
//   popup.remove();
// });

  // When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'khumbuIcefall', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Khumbu Icefall");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/Khumbu-Icefall.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: #14bcff">18,000 ft (5,486 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = '10.5%';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '11,035 (3,364 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '400 ft (106 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Take extra care in this area, the ice and crevasses can be dangerous to cross.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Khumbu Icefall';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.87348093822881, 27.99618320240794])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
  });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'camp1', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail1.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Bridgewood St to Hunters Park Ln")
    .addTo(map);
   
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("Camp 1");

  //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail1_2.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = div.innerHTML = '<span style="color: cyan">19,900 ft (6,065 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = '9.7%';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '9,135 ft (2,785 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = '2,300 ft (685 m)';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Located near Bunker Hill Elementary School; connects Taylorcrest Ct and Taylorcrest Rd';

  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';
  // //console.log(route.features[0].geometry.coordinates[counter]);
  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.87624051444797, 27.98704598816326])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
    //.togglePopup();
  });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'camp2', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail2_1.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Trail End St to Timberglen Dr")
    .addTo(map);
   
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("Camp 2");

  //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail2_1.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = div.innerHTML = '<span style="color: #7fc97f">21,300 ft (6,500 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = '9.4%';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '7,735 ft (2,350 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = '3,700 ft (1,120 m)';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Located at the intersection of Greenbay Dr and Coachman St; trail connects two ends of Greenbay Dr';

  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';

  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.90335492493271, 27.980322036569067])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'camp3', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail2_2.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Timberglen Dr to Trail End St")
    .addTo(map);
   
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("Camp 3");

  //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail2_2.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = div.innerHTML = '<span style="color: #fd8d3c">24,500 ft (7,470 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = '8.7%';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '4,535 ft (1,380 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = '6,900 ft (2,090 m)';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Located near Greenbay Dr and Coachman St; trail connects two ends of Greenbay Dr';

  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';

  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.92478118334084, 27.967650460942664])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'camp4', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail3.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Timberglen Dr to Caruthers Ln")
    .addTo(map);
   
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("Camp 4");

  //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail3_1.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = '<span style="color: #f16913">26,000 ft (7,925 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7.8%</span>';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '3,035 ft (925 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = '8,400 ft (2,545 m)';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Connects Greenbay Dr to Quail Hollow Ln';

  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';

  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.93082159811098, 27.973526561469413])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
    //.togglePopup();
  });

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'camp5', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail3.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Caruthers Ln to Timberglen Dr")
    .addTo(map);
   
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("South Summit");

  //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail3_2.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,700 ft (8,748 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '335 ft (102 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = '11,100 ft (3,368 m)';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Connects Quail Hollow Ln to Greenbay Dr';

  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';

  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.92582516958662, 27.985105632009432])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'camp6', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail4_1.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Tarrington Dr to Oak Valley Dr")
    .addTo(map);
   
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("South Summit");

  //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail4_1.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,700 ft (8,748 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '335 ft (102 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = '11,100 ft (3,368 m)';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Connects Blalock Rd to Dunsinane St';

  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';

  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.92582516958662, 27.985105632009432])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('mouseenter', 'camp7', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }

  popup
    .setLngLat(coordinates)
    .setHTML("<img src=\"images/logo.jpg\" width=\"100px\" height=\"100px\">" + "Hedwig Village" + "<br>" 
    + "<img src=\"images/trail4_2.png\" width=\"200px\" height=\"150px\">" + "<br>" + "Trails of Hedwig Village" 
    + "<br>" + "<img src=\"images/trail.png\">" + "Trail Location" + "<br>" 
    + "Connects Oak Valley Dr to Tarrington Dr")
    .addTo(map);
   
  //var popup = new mapboxgl.Popup({ offset: 0 })
  //.setText("South Summit");

  //Add things to the side panel
  // var div = document.getElementById('locImg');
  // div.innerHTML = '';
  // div.innerHTML = "<img src=\"images/trail4_2.png\" width=\"200px\" height=\"150px\">";

  // var div = document.getElementById('elevation');
  // div.innerHTML = '';
  // div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,700 ft (8,748 m)</span>';

  // var div2 = document.getElementById('oxygen');
  // div2.innerHTML = '';
  // div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
  
  // var div3 = document.getElementById('distToSummit');
  // div3.innerHTML = '';
  // div3.innerHTML = '335 ft (102 m)';

  // var div4 = document.getElementById('distToBaseCamp');
  // div4.innerHTML = '';
  // div4.innerHTML = '11,100 ft (3,368 m)';

  // var div5 = document.getElementById('info');
  // div5.innerHTML = '';
  // div5.innerHTML = 'Connects Dunsinane St to Blalock Rd';

  // var div6 = document.getElementById('Location');
  // div6.innerHTML = '';
  // div6.innerHTML = 'Trails of Bunker Hill';

  // // create DOM element for the marker
  // var el = document.createElement('div');
  // el.id = 'marker';

  // // create the marker
  // new mapboxgl.Marker(el)
  //   .setLngLat([86.92582516958662, 27.985105632009432])
  //   //.setPopup(popup) // sets a popup on this marker
  //   .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'hillaryStep', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Hillary Step");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/hillary-step.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">28,840 ft (8,790 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">7%</span>';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = '195 ft (60 m)';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '11,240 ft (3,410 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Named in honor of Sir Edmund Hillary and Tenzing Norgay, this is the most difficult portion of the climb. It was affected by the 2015 Nepal earthquake, but still remains the last major challenge before the summit.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Hillary Step';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.9250293824731, 27.98713299038748])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});

// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'summit', function (e) {
  var coordinates = e.features[0].geometry.coordinates.slice();
  var description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  var popup = new mapboxgl.Popup({ offset: 0 })
  .setText("Summit");

  //Add things to the side panel
  var div = document.getElementById('locImg');
  div.innerHTML = '';
  div.innerHTML = "<img src=\"images/everest_sumit.jpg\" width=\"200px\" height=\"150px\">";

  var div = document.getElementById('elevation');
  div.innerHTML = '';
  div.innerHTML = div.innerHTML = '<span style="color: rgb(201, 34, 34)">29,035 ft (8,850 m)</span>';

  var div2 = document.getElementById('oxygen');
  div2.innerHTML = '';
  div2.innerHTML = div2.innerHTML = '<span style="color: rgb(201, 34, 34)">6.9%</span>';
  
  var div3 = document.getElementById('distToSummit');
  div3.innerHTML = '';
  div3.innerHTML = 'You are here!';

  var div4 = document.getElementById('distToBaseCamp');
  div4.innerHTML = '';
  div4.innerHTML = '11,435 ft (3,485 m)';

  var div5 = document.getElementById('info');
  div5.innerHTML = '';
  div5.innerHTML = 'Congratulations, you made it! Take a moment to look around and savor your accomplishment, but don'+"'t"+' tarry too long- you still have to make it back down safely.';

  var div6 = document.getElementById('Location');
  div6.innerHTML = '';
  div6.innerHTML = 'Summit';

  // create DOM element for the marker
  var el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
    .setLngLat([86.92529072310032, 27.98803366188707])
    //.setPopup(popup) // sets a popup on this marker
    .addTo(map)
    //.togglePopup();
});
   
  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'baseCamp', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/trail_selected.png", function(error, image) {
        map.addImage("custom-marker100", image);
        map.addLayer({
        "id": "baseCamp100",
        "source": "baseCamp",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker100",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });  
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  //window.setTimeout(function() {deSelect()}, 1);
  //function deSelect() {
    map.on('mouseout', 'baseCamp', function () {
      map.getCanvas().style.cursor = '';
      map.removeImage("custom-marker100");
      map.removeLayer("baseCamp100");
    });

  // map.on('mouseout', 'baseCamp100', function () {
  //   map.getCanvas().style.cursor = '';
  //   map.removeLayer("baseCamp100");
  //   map.removeImage("custom-marker100");
  // });
  //}

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp1', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/trail_selected.png", function(error, image) {
        map.addImage("custom-marker101", image);
        map.addLayer({
        "id": "baseCamp101",
        "source": "camp1",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker101",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseout', 'camp1', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp101");
    map.removeImage("custom-marker101");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp2', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/trail_selected.png", function(error, image) {
        map.addImage("custom-marker102", image);
        map.addLayer({
        "id": "baseCamp102",
        "source": "camp2",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker102",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  }); 
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseout', 'camp2', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp102");
    map.removeImage("custom-marker102");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp3', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/trail_selected.png", function(error, image) {
        map.addImage("custom-marker103", image);
        map.addLayer({
        "id": "baseCamp103",
        "source": "camp3",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker103",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseout', 'camp3', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp103");
    map.removeImage("custom-marker103");
  });

  //Change the cursor to a pointer and highlight the marker when the user mouses over it.
  map.on('mouseenter', 'camp4', function () {
    map.getCanvas().style.cursor = 'pointer';
    map.loadImage("images/trail_selected.png", function(error, image) {
        map.addImage("custom-marker104", image);
        map.addLayer({
        "id": "baseCamp104",
        "source": "camp4",
        "type": "symbol",
        "layout": {
        "icon-image": "custom-marker104",
        "icon-rotate": ["get", "bearing"],
        "icon-allow-overlap": true,
        "icon-ignore-placement": true
        }
        });
      });
  });
  //Change the cursor back to the default and un-highlight the marker when the user mouses out.
  map.on('mouseout', 'camp4', function () {
    map.getCanvas().style.cursor = '';
    map.removeLayer("baseCamp104");
    map.removeImage("custom-marker104");
  });

    //Change the cursor to a pointer and highlight the marker when the user mouses over it.
    map.on('mouseenter', 'camp5', function () {
      map.getCanvas().style.cursor = 'pointer';
      map.loadImage("images/trail_selected.png", function(error, image) {
          map.addImage("custom-marker105", image);
          map.addLayer({
          "id": "baseCamp105",
          "source": "camp5",
          "type": "symbol",
          "layout": {
          "icon-image": "custom-marker105",
          "icon-rotate": ["get", "bearing"],
          "icon-allow-overlap": true,
          "icon-ignore-placement": true
          }
          });
        });
    });
    //Change the cursor back to the default and un-highlight the marker when the user mouses out.
    map.on('mouseout', 'camp5', function () {
      map.getCanvas().style.cursor = '';
      map.removeLayer("baseCamp105");
      map.removeImage("custom-marker105");
    });

    //Change the cursor to a pointer and highlight the marker when the user mouses over it.
    map.on('mouseenter', 'camp6', function () {
      map.getCanvas().style.cursor = 'pointer';
      map.loadImage("images/trail_selected.png", function(error, image) {
          map.addImage("custom-marker106", image);
          map.addLayer({
          "id": "baseCamp106",
          "source": "camp6",
          "type": "symbol",
          "layout": {
          "icon-image": "custom-marker106",
          "icon-rotate": ["get", "bearing"],
          "icon-allow-overlap": true,
          "icon-ignore-placement": true
          }
          });
        });
    });
    //Change the cursor back to the default and un-highlight the marker when the user mouses out.
    map.on('mouseout', 'camp6', function () {
      map.getCanvas().style.cursor = '';
      map.removeLayer("baseCamp106");
      map.removeImage("custom-marker106");
    });

      //Change the cursor to a pointer and highlight the marker when the user mouses over it.
      map.on('mouseenter', 'camp7', function () {
        map.getCanvas().style.cursor = 'pointer';
        map.loadImage("images/trail_selected.png", function(error, image) {
            map.addImage("custom-marker107", image);
            map.addLayer({
            "id": "baseCamp107",
            "source": "camp7",
            "type": "symbol",
            "layout": {
            "icon-image": "custom-marker107",
            "icon-rotate": ["get", "bearing"],
            "icon-allow-overlap": true,
            "icon-ignore-placement": true
            }
            });
          });
      });
      //Change the cursor back to the default and un-highlight the marker when the user mouses out.
      map.on('mouseout', 'camp7', function () {
        map.getCanvas().style.cursor = '';
        map.removeLayer("baseCamp107");
        map.removeImage("custom-marker107");
      });

// A simple line from origin to destination.
var route = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "geometry": {
  "type": "LineString",
  "coordinates": [[-95.506129, 29.772158], [-95.506096, 29.771619]]
  }
  }]
};

var route2 = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "geometry": {
  "type": "LineString",
  "coordinates": [[-95.505773, 29.768197], [-95.505835, 29.767540]]
  }
  }]
};

var route3 = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "geometry": {
  "type": "LineString",
  "coordinates": [[-95.502336, 29.767110], [-95.503040, 29.766614]]
  }
  }]
};

var route4 = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "geometry": {
  "type": "LineString",
  "coordinates": [[-95.499569, 29.781060], [-95.499554, 29.780531], [-95.499423, 29.780452]]
  }
  }]
};


var origin=[86.85719586641274, 28.00647209182954];

  // A single point that animates along the route.
  // Coordinates are initially set to origin.
  var point = {
  "type": "FeatureCollection",
  "features": [{
  "type": "Feature",
  "properties": {},
  "geometry": {
  "type": "Point",
  "coordinates": origin
  }
  }]
};
  
// Calculate the distance in kilometers between route start/end point.
var lineDistance = turf.lineDistance(route.features[0], 'kilometers');

// Array used to store the coordinates of the route
var arc = [];

// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
var steps = 500;

// Draw an arc between the `origin` & `destination` of the two points
for (var i = 0; i < lineDistance; i += lineDistance / steps) {
  var segment = turf.along(route.features[0], i, 'kilometers');
  arc.push(segment.geometry.coordinates);
}

// Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = arc;

// Used to increment the value of the point measurement against the route.
var counter = 0;

map.on('load', function () {
    map.addSource('contours', {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2'
    });
    map.addLayer({
      'id': 'Elevation',
      'type': 'line',
      'source': 'contours',
      'source-layer': 'contour',
      'layout': {
        'visibility': 'none',
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
      'line-color': '#877b59',
      'line-width': 1,   
      }
    });
    
  
    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
      "type": "geojson",
      lineMetrics: true,
      "data": route
    });

    map.addSource('route2', {
      "type": "geojson",
      lineMetrics: true,
      "data": route2
    });

    map.addSource('route3', {
      "type": "geojson",
      lineMetrics: true,
      "data": route3
    });

    map.addSource('route4', {
      "type": "geojson",
      lineMetrics: true,
      "data": route4
    });
    
    map.addSource('point', {
      "type": "geojson",
      "data": point
    });
    
    map.addLayer({
      "id": "route",
      "source": "route",
      "type": "line",
      "paint": {
      "line-width": 3,
      "line-color": "black"
      },
      layout: {
      'line-cap': 'round',
      'line-join': 'round'
      }
    });

    map.addLayer({
      "id": "route2",
      "source": "route2",
      "type": "line",
      "paint": {
      "line-width": 3,
      "line-color": "black"
      },
      layout: {
      'line-cap': 'round',
      'line-join': 'round'
      }
    });

    map.addLayer({
      "id": "route3",
      "source": "route3",
      "type": "line",
      "paint": {
      "line-width": 3,
      "line-color": "black"
      },
      layout: {
      'line-cap': 'round',
      'line-join': 'round'
      }
    });

    map.addLayer({
      "id": "route4",
      "source": "route4",
      "type": "line",
      "paint": {
      "line-width": 3,
      "line-color": "black"
      },
      layout: {
      'line-cap': 'round',
      'line-join': 'round'
      }
    });

    map.loadImage("images/trek.png", function(error, image) {
      map.addImage("custom-marker5", image);
      map.addLayer({
        "id": "point",
        "source": "point",
        "type": "symbol",
        "layout": {
          "icon-image": "custom-marker5",
          "icon-rotate": ["get", "bearing"],
          "icon-rotation-alignment": "map",
          "icon-allow-overlap": true,
          "icon-ignore-placement": true
        }
      });
    });

    //Array used to store the coordinates of the POIs (markers)
    var test = [[86.85719586641274, 28.00647209182954], [86.87345895826398, 27.996277774768647], 
    [86.87623440610264, 27.987051652940377], [86.90329584448963, 27.98032248621871], 
    [86.92471347509948, 27.967655327696573], [86.93082117375526, 27.97352579739608], 
    [86.9258221361935, 27.985193461286066], [86.92505121693608, 27.98771791865574], 
    [86.9254, 27.9889]];
    var flag = false; //detect whether popup triggers
    var flagStop = true; //flag stop and start
 });
        
  var toggleableLayerIds = [ 'Elevation'];

  for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
      
    var link = document.createElement('a');
    link.href = '#';
    link.innerHTML ='<i class="fas fa-mountain"></i>';
      
    link.onclick = function (e) {
      var clickedLayer = id;
      e.preventDefault();
      e.stopPropagation();
        
      var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
        
      if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
      } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
      }
    };
      
    var layers = document.getElementById('menu');
    layers.appendChild(link);
  }
};

/*toggling weather widget with animation*/
$("#buttonweather").click(function() {
  $("#weatherwidget").slideToggle(500);
});

/*Higlighting the play button on the close of welcome window */
$("#go").click(function() {
  $("#play").addClass("highlight");
});

$("#play").click(function() {
  $("#play").removeClass("highlight");
});

$(document).ready(function() {        
  $('#welcomeWindow').modal('show');
  createMap();
});