// Initialize the map
var map = L.map('map').setView([52.6680, -8.6305], 13);

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Custom marker icons
var redIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var greenIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Function to add a marker with a custom icon, link, and tooltip
function addMarker(lat, lng, popupContent, tooltipContent, icon) {
    var marker = L.marker([lat, lng], { icon: icon }).addTo(map);
    marker.bindPopup(popupContent);
    marker.bindTooltip(tooltipContent, { permanent: false, direction: 'top' });
    // Extend the bounds to include this marker
    bounds.extend(marker.getLatLng());
}

// Create a bounds object to store all the marker coordinates
var bounds = L.latLngBounds();

// Add markers for our business addresses, blue,  with links and tooltips
addMarker(52.6191, -7.7196, '<a href="#">Roadvacs Irl Ltd</a>', 'Roadvacs IRL Ltd', blueIcon);
addMarker(53.09156627375013, -1.361926418017554, '<a href="#">Roadvacs UK</a>', 'Roadvacs UK', blueIcon);
// Add markers for our customers addresses, green,  with links and tooltips
addMarker(51.938095132372545, 0.8156100675818344, '<a href="#">AA Turner Tankers</a>', 'AA Turner Tankers', greenIcon);
addMarker(54.937771352904385, -2.992587402552944, '<a href="#">AD Andidrain Ltd</a>', 'AD Andidrain Ltd', greenIcon);
addMarker(54.11692439470301, -1.5766532418992028, '<a href="#">Adler & Allan</a>', 'Adler & Allan', greenIcon);
addMarker(51.89413682803283, -8.367585175804356, '<a href="#">Ambipar Group</a>', 'Ambipar Group', greenIcon);
addMarker(50.971710679695455, -0.08897536233268646, '<a href="#">Basement Pumps</a>', 'Basement Pumps', greenIcon);
addMarker(55.60086918326677, -4.537056273673114, '<a href="#">Billy Bowie</a>', 'Billy Bowie', greenIcon);
addMarker(54.46089507118379, -1.1785178467657709, '<a href="#">Bull Tankers</a>', 'Bull Tankers', greenIcon);
addMarker(50.85156510011319, 0.5218811088235353, '<a href="#">Cappagh Browne</a>', 'Cappagh Browne', greenIcon);
addMarker(52.23504758241398, 0.7671950560719424, '<a href="#">Cargate Engineering</a>', 'Cargate Engineering', greenIcon);
addMarker(52.83780784426494, -8.974724989197378, '<a href="#">CES Environmental</a>', 'CES Environmental', greenIcon);
addMarker(52.8363243093971, -8.968344460361125, '<a href="#">Clare Drains</a>', 'Clare Drains', greenIcon);
addMarker(55.84778878147871, -4.214581015984119, '<a href="#">Clearwater</a>', 'Clearwater', greenIcon);
addMarker(53.774638327623016, -0.34055934697286144, '<a href="#">Clearway</a>', 'Clearway', greenIcon);
addMarker(51.76585349051085, -0.07648918926503993, '<a href="#">Convert Water</a>', 'Convert Water', greenIcon);
addMarker(53.008594060145604, -1.7126753180228336, '<a href="#">CPJ Environmental</a>', 'CPJ Environmental', greenIcon);
addMarker(54.6352549654862, -8.113718346754446, '<a href="#">Donegal Waste</a>', 'Donegal Waste', greenIcon);
addMarker(51.67461298494568, -1.3052765767117345, '<a href="#">Drain Technology</a>', 'Drain Technology', greenIcon);
addMarker(51.51603223694044, -3.5575853469533714, '<a href="#">Drainforce</a>', 'Drainforce', greenIcon);
addMarker(55.02881921073546, -7.760440472110964, '<a href="#">DS Environmental</a>', 'DS Environmental', greenIcon);
addMarker(53.7183, -1.4961, '<a href="#">Duffy</a>', 'Duffy', greenIcon);
addMarker(50.95083336201689, -2.6819404028067697, '<a href="#">Elliot Environmental</a>', 'Elliot Environmental', greenIcon);
addMarker(55.93033731330674, -3.417308105548114, '<a href="#">Enva</a>', 'Enva', greenIcon);
addMarker(56.03523503354138, -3.7646649294732075, '<a href="#">Enviro-Clean</a>', 'Enviro-Clean', greenIcon);
addMarker(50.89546010958609, -1.4299090451375, '<a href="#">Eurotank</a>', 'Eurotank', greenIcon);
addMarker(51.30388380875228, 0.4622665107061013, '<a href="#">GC Pumps</a>', 'GC Pumps', greenIcon);
addMarker(53.71265426946947, -7.8288535179777705, '<a href="#">Glancy Environmental</a>', 'Glancy Environmental', greenIcon);
addMarker(50.386923947242174, -3.9611825970233485, '<a href="#">Glanville Environmental</a>', 'Glanville Environmental', greenIcon);
addMarker(54.0651, -1.0924, '<a href="#">Harpers Environmental</a>', 'Harpers Environmental', greenIcon);
addMarker(53.61507766085801, -0.6555795623877786, '<a href="#">Intech Environmental</a>', 'Intech Environmental', greenIcon);
addMarker(53.43680439548052, -2.4257439186088483, '<a href="#">IWJS</a>', 'IWJS', greenIcon);
addMarker(53.48755929340492, -2.3527243342952446, '<a href="#">Lanes Group</a>', 'Lanes Group', greenIcon);
addMarker(53.525221796043745, -2.505899660317118, '<a href="#">Mantank</a>', 'Mantank', greenIcon);
addMarker(54.01951629557752, -7.322615931448899, '<a href="#">McBreen</a>', 'McBreen', greenIcon);
addMarker(55.858238682440394, -4.316711151501831, '<a href="#">Merkland</a>', 'Merkland', greenIcon);
addMarker(52.555394178511634, -1.3735993656640682, '<a href="#">PRB Drainage</a>', 'PRB Drainage', greenIcon);
addMarker(50.80838111575855, -1.917235630618402, '<a href="#">Pro Drainage</a>', 'Pro Drainage', greenIcon);
addMarker(51.645376424165974, 0.6852619619882994, '<a href="#">ROE Environmental</a>', 'ROE Environmental', greenIcon);
addMarker(53.72446366917978, -2.6709095321705836, '<a href="#">Sapphire Utility Solutions</a>', 'Sapphire Utility Solutions', greenIcon);
addMarker(52.33939528431693, -2.2724574654373644, '<a href="#">Slicker</a>', 'Slicker', greenIcon);
addMarker(53.24185038124966, -9.508786643767106, '<a href="#">SOS Liquid Waste</a>', 'SOS Liquid Waste', greenIcon);
addMarker(50.9730791469618, -0.19619458029157244, '<a href="#">Sweeptech</a>', 'Sweeptech', greenIcon);
addMarker(51.34155056080233, 0.5580595739819524, '<a href="#">SW Drainage</a>', 'SW Drainage', greenIcon);
addMarker(53.493546435012924, -6.193358963213006, '<a href="#">Tank & Drain Services</a>', 'Tank & Drain Services', greenIcon);
addMarker(52.013488974272725, -0.345711572701091, '<a href="#">TapThat Plumbers</a>', 'TapThat Plumbers', greenIcon);
addMarker(57.11264332655676, -2.0771283590749023, '<a href="#">Taylors Industrial Services</a>', 'Taylors Industrial Services', greenIcon);
addMarker(54.58359309329067, -1.1171870023019557, '<a href="#">Telcoss</a>', 'Telcoss', greenIcon);
addMarker(53.30195412362036, -2.3707079273847267, '<a href="#">Totus Environmental</a>', 'Totus Environmental', greenIcon);
addMarker(53.201969106012974, -3.004520820773555, '<a href="#">Trade Effluent Services</a>', 'Trade Effluent Services', greenIcon);
addMarker(53.351905346126195, -2.5327937341551094, '<a href="#">WB Drainage</a>', 'WB Drainage', greenIcon);
addMarker(52.00279982846905, -2.0562475243113942, '<a href="#">William Gilder</a>', 'William Gilder', greenIcon);


// Add markers for our potential customers, red,  with links and tooltips
addMarker(53.97336261621961, -6.720400815345416, '<a href="#">JC Enviro</a>', 'JC Enviro', redIcon);
addMarker(53.11714560680234, -6.096205340493168, '<a href="#">Kelly Drain</a>', 'Kelly Drain', redIcon);
addMarker(53.486257622126836, -2.856244842327292, '<a href="#">Ancorra Environmental</a>', 'Ancorra Environmental', redIcon);
addMarker(53.28294339717505, -6.452016247804731, '<a href="#">Ancorra Environmental</a>', 'Ancorra Environmental', redIcon);
addMarker(53.406458511019565, -6.232812483240424, '<a href="#">Dyno-Rod</a>', 'Dyno-Rod', redIcon);
addMarker(53.02876938165249, -7.31441361351117, '<a href="#">Enva</a>', 'Enva', redIcon);
addMarker(53.201492362926935, -6.499102215416859, '<a href="#">Bluestream</a>', 'Bluestream', redIcon);
addMarker(52.45587279421024, -6.682556657910822, '<a href="#">M & T Plant Hire</a>', 'M & T Plant Hire', redIcon);

// Set the map view to the bounds
map.fitBounds(bounds);