export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieHJpcy1nYWJyaWVsIiwiYSI6ImNsbGdodWVoMDE1cm4zaXF5YmhqODlvdHgifQ.D0bh24s6owHtylEx8qt_kQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBonds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};

//'pk.J1Ijoiam9uYXNzYXNzY2htZwR0bWFubiIsImeiOiJjanZpOW0wMG8wM2puNGFtdjF0ZGpzNGttIn0.FsawlH24WAZyI');
