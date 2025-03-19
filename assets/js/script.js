// Initialize the map
var map = L.map('map').setView([52.6680, -8.6305], 13);

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Custom marker icons
const icons = {
    red: L.icon({
        iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    }),
    green: L.icon({
        iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    }),
    blue: L.icon({
        iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
};

// Function to add a marker with a custom icon, link, tooltip, and click event
function addMarker(lat, lng, popupContent, tooltipContent, icon, customerName) {
    var marker = L.marker([lat, lng], { icon: icon }).addTo(map);
    marker.bindPopup(popupContent);
    marker.bindTooltip(tooltipContent, { permanent: false, direction: 'top' });

    // Add a click event to redirect to the customer page with the customer name
    if (customerName) {
        marker.on('click', function () {
            window.location.href = `customerlist.html?customer=${encodeURIComponent(customerName)}`;
        });
    }

    bounds.extend(marker.getLatLng());
}

// Create bounds to fit all markers within the map view
const bounds = L.latLngBounds();

// Add markers for our business addresses, blue,  with links and tooltips
addMarker(52.6191, -7.7196, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Roadvacs IRL Ltd', blueIcon);
addMarker(53.09156627375013, -1.361926418017554, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Roadvacs', blueIcon);
// Add markers for our customers addresses, green,  with links and tooltips
addMarker(51.938095132372545, 0.8156100675818344, ''<a href="#">AA Turner Tankers</a>'', 'AA Turner Tankers', greenIcon);
addMarker(54.937771352904385, -2.992587402552944, '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', 'AD Andidrain Ltd', greenIcon);
addMarker(54.11692439470301, -1.5766532418992028, '<a href="https://example.com/StationParade" target="_blank">80 Station Parade</a>', 'Adler & Allan', greenIcon);
addMarker(51.89413682803283, -8.367585175804356, '<a href="https://example.com/IslandCorporatePark" target="_blank">Island Corporate Park</a>', 'Ambipar Group', greenIcon);
addMarker(50.971710679695455, -0.08897536233268646, '<a href="https://example.com/basementpumps" target="_blank">basement pumps</a>', 'Basement Pumps', greenIcon);
addMarker(55.60086918326677, -4.537056273673114, '<a href="https://example.com/BillyBowie" target="_blank">Billy Bowie Special Projects Ltd</a>', 'Billy Bowie', greenIcon);
addMarker(54.46089507118379, -1.1785178467657709, '<a href="https://example.com/RoseberryCourt" target="_blank">Roseberry Court</a>', 'Bull Tankers', greenIcon);
addMarker(50.85156510011319, 0.5218811088235353, '<a href="https://example.com/BexhillRoad" target="_blank">Bexhill Road</a>', 'Cappagh Browne', greenIcon);
addMarker(52.23504758241398, 0.7671950560719424, '<a href="https://example.com/LowerGorse" target="_blank">Lower Gorse</a>', 'Cargate Engineering', greenIcon);
addMarker(52.83780784426494, -8.974724989197378, '<a href="https://example.com/TracklandsBusinessPark" target="_blank">Tracklands Business Park</a>', 'CES Environmental', greenIcon);
addMarker(52.8363243093971, -8.968344460361125, '<a href="https://example.com/QuinRoadBusinessPark" target="_blank">Quin Road Business Park</a>', 'Clare Drains', greenIcon);
addMarker(55.84778878147871, -4.214581015984119, '<a href="https://example.com/GlasgowG403PX" target="_blank">Glasgow G40 3PX</a>', 'Clearwater', greenIcon);
addMarker(53.774638327623016, -0.34055934697286144, '<a href="https://example.com/HU70XW" target="_blank">HU7 0XW</a>', 'Clearway', greenIcon);
addMarker(51.76585349051085, -0.07648918926503993, '<a href="https://example.com/EdwardsGreenFarm" target="_blank">Edwards Green Farm</a>', 'Convert Water', greenIcon);
addMarker(53.008594060145604, -1.7126753180228336, '<a href="https://example.com/Location" target="_blank">Location</a>', 'CPJ Environmental', greenIcon);
addMarker(54.6352549654862, -8.113718346754446, '<a href="https://example.com/Ardlenagh" target="_blank">Ardlenagh</a>', 'Donegal Waste', greenIcon);
addMarker(51.67461298494568, -1.3052765767117345, '<a href="https://example.com/NuffieldWay" target="_blank">Nuffield Way</a>', 'Drain Technology', greenIcon);
addMarker(51.51603223694044, -3.5575853469533714, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Drainforce', greenIcon);
addMarker(55.02881921073546, -7.760440472110964, '<a href="https://example.com/LeiterKilmacrennan" target="_blank">Leiter Kilmacrennan</a>', 'DS Environmental', greenIcon);
addMarker(53.7183, -1.4961, '<a href="https://example.com/WF33HA" target="_blank">WF3 3HA</a>', 'Duffy', greenIcon);
addMarker(50.95083336201689, -2.6819404028067697, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Elliot Environmental', greenIcon);
addMarker(55.93033731330674, -3.417308105548114, '<a href="https://example.com/PA33BD" target="_blank">PA3 3BD</a>', 'Enva', greenIcon);
addMarker(56.03523503354138, -3.7646649294732075, '<a href="https://example.com/G745HA" target="_blank">G74 5HA</a>', 'Enviro-Clean', greenIcon);
addMarker(50.89546010958609, -1.4299090451375, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Eurotank', greenIcon);
addMarker(51.30388380875228, 0.4622665107061013, '<a href="https://example.com/ME207JZ" target="_blank">ME20 7JZ</a>', 'GC Pumps', greenIcon);
addMarker(53.71265426946947, -7.8288535179777705, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Glancy Environmental', greenIcon);
addMarker(50.386923947242174, -3.9611825970233485, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Glanville Environmental', greenIcon);
addMarker(54.0651, -1.0924, '<a href="https://example.com/YO611EY" target="_blank">YO61 1EY</a>', 'Harpers Environmental', greenIcon);
addMarker(53.61507766085801, -0.6555795623877786, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Intech Environmental', greenIcon);
addMarker(53.43680439548052, -2.4257439186088483, '<a href="https://example.com/M445EG" target="_blank">M44 5EG</a>', 'IWJS', greenIcon);
addMarker(53.48755929340492, -2.3527243342952446, '<a href="https://example.com/M309PJ" target="_blank">M30 9PJ</a>', 'Lanes Group', greenIcon);
addMarker(53.525221796043745, -2.505899660317118, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Mantank', greenIcon);
addMarker(54.01951629557752, -7.322615931448899, '<a href="https://example.com/Location" target="_blank">Location</a>', 'McBreen', greenIcon);
addMarker(55.858238682440394, -4.316711151501831, '<a href="https://example.com/G513HZ" target="_blank">G51 3HZ</a>', 'Merkland', greenIcon);
addMarker(52.555394178511634, -1.3735993656640682, '<a href="https://example.com/Location" target="_blank">Location</a>', 'PRB Drainage', greenIcon);
addMarker(50.80838111575855, -1.917235630618402, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Pro Drainage', greenIcon);
addMarker(51.645376424165974, 0.6852619619882994, '<a href="https://example.com/Location" target="_blank">Location</a>', 'ROE Environmental', greenIcon);
addMarker(53.72446366917978, -2.6709095321705836, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Sapphire Utility Solutions', greenIcon);
addMarker(52.33939528431693, -2.2724574654373644, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Slicker', greenIcon);
addMarker(53.24185038124966, -9.508786643767106, '<a href="https://example.com/Location" target="_blank">Location</a>', 'SOS Liquid Waste', greenIcon);
addMarker(50.9730791469618, -0.19619458029157244, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Sweeptech', greenIcon);
addMarker(51.34155056080233, 0.5580595739819524, '<a href="https://example.com/Location" target="_blank">Location</a>', 'SW Drainage', greenIcon);
addMarker(53.493546435012924, -6.193358963213006, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Tank & Drain Services', greenIcon);
addMarker(52.013488974272725, -0.345711572701091, '<a href="https://example.com/Location" target="_blank">Location</a>', 'TapThat Plumbers', greenIcon);
addMarker(57.11264332655676, -2.0771283590749023, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Taylors Industrial Services', greenIcon);
addMarker(54.58359309329067, -1.1171870023019557, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Telcoss', greenIcon);
addMarker(53.30195412362036, -2.3707079273847267, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Totus Environmental', greenIcon);
addMarker(53.201969106012974, -3.004520820773555, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Trade Effluent Services', greenIcon);
addMarker(53.351905346126195, -2.5327937341551094, '<a href="https://example.com/Location" target="_blank">Location</a>', 'WB Drainage', greenIcon);
addMarker(52.00279982846905, -2.0562475243113942, '<a href="https://example.com/Location" target="_blank">Location</a>', 'William Gilder', greenIcon);

// Add markers for our potential customers, red,  with links and tooltips
addMarker(53.97336261621961, -6.720400815345416, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'JC Enviro', redIcon);
addMarker(53.11714560680234, -6.096205340493168, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Kelly Drain', redIcon);
addMarker(53.486257622126836, -2.856244842327292, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Ancorra Environmental', redIcon);
addMarker(53.28294339717505, -6.452016247804731, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Ancorra Environmental', redIcon);
addMarker(53.406458511019565, -6.232812483240424, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Dyno-Rod', redIcon);
addMarker(53.02876938165249, -7.31441361351117, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Enva', redIcon);
addMarker(53.201492362926935, -6.499102215416859, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'Bluestream', redIcon);
addMarker(52.45587279421024, -6.682556657910822, '<a href="https://example.com/E41PF60" target="_blank">Location</a>', 'M & T Plant Hire', redIcon);

map.fitBounds(bounds);

// Truck data for table
const trucks = [
{ customer: "Meath Jetting Services", make: "Muller", model: "Canalmaster F150 E", regPlate: "04-MH-15490", buildNumber: "10401600", deliveryDate: "to be updated" },
            { customer: "Enva", make: "Muller", model: "Canalmaster F180 rec type I", regPlate: "to be updated", buildNumber: "10040500", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Muller", model: "Canalmaster F200 rec. type II", regPlate: "SF15CJU", buildNumber: "11443500", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Muller", model: "Canalmaster F200 rec. type II", regPlate: "SF15CJU", buildNumber: "11443500", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Canalmaster F130 E", regPlate: "151-CN-308", buildNumber: "11442300", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Vacumaster F90 KH", regPlate: "to be updated", buildNumber: "11443000", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Vacumaster F90 KH", regPlate: "to be updated", buildNumber: "11443100", deliveryDate: "to be updated" },
            { customer: "Tank Pipe & Drain Environmental", make: "Muller", model: "Vacumaster F90 KH", regPlate: "151-DL-2017", buildNumber: "11443200", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "Vacumaster F180 KGH", regPlate: "MK15 MTK", buildNumber: "11443700", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "Vacumaster F180 KGH", regPlate: "MK65 MTK", buildNumber: "11444000", deliveryDate: "to be updated" },
            { customer: "JM Murdoch", make: "Muller", model: "Canalmaster F155 E rec. type I", regPlate: "AY65KVR", buildNumber: "11540700", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F130 E", regPlate: "AY66 KUT", buildNumber: "11541300", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F145 E rec. type I" , regPlate: "AU16 BWC", buildNumber: "11541400", deliveryDate: "to be updated" },
            { customer: "CSG", make: "Muller", model: "Vacumaster F180 KH", regPlate: "PO16 KUD", buildNumber: "11541700", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "Canalmaster F130 E", regPlate: "L66MTK", buildNumber: "11541800", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "Canalmaster F130 E", regPlate: "550DG", buildNumber: "11541900", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "Canalmaster F155 EWA Eco HELI", regPlate: "45WY", buildNumber: "11542000", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Vacumaster F130 KH", regPlate: "PX16 ZJO", buildNumber: "11542200", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Vacumaster F180 KH" , regPlate: "PX16 ZJN", buildNumber: "11542300", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "Canalmaster F135 K", regPlate: "2004JG", buildNumber: "11542800", deliveryDate: "to be updated" },
            { customer: "Telcoss", make: "Muller", model: "Canalmaster F195 K", regPlate: "PX16 CNO", buildNumber: "111542900", deliveryDate: "to be updated" },
            { customer: "Civil Safety", make: "Muller", model: "Canalmaster F195 K", regPlate: "PX16 CNN", buildNumber: "11543400", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F130 E rec. type I", regPlate: "AY66 KRK", buildNumber: "11543200", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Canalmaster F140 E", regPlate: "161-D-47749", buildNumber: "11543400", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "Canalmaster F135 K", regPlate: "90 UT", buildNumber: "11543500", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Canalmaster F90 K", regPlate: "PX67 CXU", buildNumber: "11642500", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F60 EWA Eco", regPlate: "AY17 KVT", buildNumber: "11642800", deliveryDate: "to be updated" },
            { customer: "BIOMARSH Environmental", make: "Muller", model: "Canalmaster F60 EWA Eco", regPlate: "AY17 KUS", buildNumber: "11642900", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Canalmaster F130 EG", regPlate: "171-CN-999", buildNumber: "11643400", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F60 EWA Eco", regPlate: "AY17 KWZ", buildNumber: "11643800", deliveryDate: "to be updated" },
            { customer: "Donegal Waste & Recycle", make: "Muller", model: "Vacumaster F90 KH", regPlate: "172-D-11186", buildNumber: "11643900", deliveryDate: "to be updated" },
            { customer: "Tank & Drain Services", make: "Muller", model: "Canalmaster F60 E WA1", regPlate: "181-D-44849", buildNumber: "11644600", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Muller", model: "Canalmaster F190 K rec. type II", regPlate: "SJ18 HZH", buildNumber: "11740600", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Canalmaster F145 E rec. type I", regPlate: "PX67 EOO", buildNumber: "11740700", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Canalmaster F130 E type I", regPlate: "181-CN-963", buildNumber: "11740900", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Canalmaster F195 K", regPlate: "PX67 DWK", buildNumber: "11741100", deliveryDate: "to be updated" },
            { customer: "ROE Enviromental", make: "Muller", model: "Canalmaster F145 EHC rec. type I", regPlate: "SS18 ROE", buildNumber: "11742000", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F110 E + tunnel washer", regPlate: "FJ18 OHR", buildNumber: "11742800", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Canalmaster F60 E WA", regPlate: "PX68 DND", buildNumber: "11743400", deliveryDate: "to be updated" },
            { customer: "WB Drainage Ltd", make: "Muller", model: "Canalmaster F190 K WA Pro", regPlate: "FJ18 OJY", buildNumber: "11743600", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Canalmaster CM F200 K", regPlate: "PV19 KTD", buildNumber: "11743900", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Canalmaster CM F190 K WA Pro", regPlate: "PX19 LCM", buildNumber: "11744000", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Muller", model: "Canalmaster CM F130 E WA", regPlate: "KU70XWL", buildNumber: "11741900", deliveryDate: "to be updated" },
            { customer: "Cappagh browne", make: "Muller", model: "Canalmaster F60 rec. type I", regPlate: "FJ69 REU", buildNumber: "11840900", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F150 E", regPlate: "FJ68 XGW", buildNumber: "11841000", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F150 E", regPlate: "FJ19 NEF", buildNumber: "11841100", deliveryDate: "to be updated" },
            { customer: "NRC", make: "Muller", model: "Canalmaster F150 E", regPlate: "FJ69 POH", buildNumber: "11841200", deliveryDate: "to be updated" },
            { customer: "Sweeptech", make: "Muller", model: "Canalmaster F160 E", regPlate: "FJ69 NDU", buildNumber: "11841700", deliveryDate: "to be updated" },
            { customer: "Ambipar", make: "Muller", model: "Canalmaster F160 E", regPlate: "FJ19 NDF", buildNumber: "11841800", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster CM F160 E", regPlate: "FJ20 PLX", buildNumber: "11841900", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster CM F160 E", regPlate: "FJ20 PLV", buildNumber: "11842000", deliveryDate: "to be updated" },
            { customer: "AD Andidrain", make: "Muller", model: "Canalmaster CM F200 K", regPlate: "PX69 LCL", buildNumber: "11842200", deliveryDate: "to be updated" },
            { customer: "Totus Environmental", make: "Muller", model: "Canalmaster CM F195 KG", regPlate: "GN19 HNK", buildNumber: "11843200", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "Canalmaster F185 K rec. type II", regPlate: "FJ19 NKS", buildNumber: "11843300", deliveryDate: "to be updated" },
            { customer: "Sweeptech", make: "Muller", model: "Canalmaster CM F160 E", regPlate: "FJ20 PYH", buildNumber: "11845700", deliveryDate: "to be updated" },
            { customer: "Drainforce", make: "Muller", model: "Canalmaster CM F130 E WA1", regPlate: "FJ70 PYS", buildNumber: "11844500", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster CM F130 E WA1", regPlate: "FE69 YSX", buildNumber: "11843500", deliveryDate: "to be updated" },
            { customer: "Cappagh browne", make: "Muller", model: "Canalmaster F60", regPlate: "WN21 KVU", buildNumber: "11940100", deliveryDate: "to be updated" },
            { customer: "Cappagh browne", make: "Muller", model: "Canalmaster F60", regPlate: "WN21 KVP", buildNumber: "11940300", deliveryDate: "to be updated" },
            { customer: "Duffy", make: "Muller", model: "Canalmaster F160", regPlate: "WN21 KVU", buildNumber: "11942800", deliveryDate: "to be updated" },
            { customer: "WB Drainage Ltd", make: "Muller", model: "Canalmaster F160", regPlate: "FG70 RXX", buildNumber: "11943900", deliveryDate: "to be updated" },
            { customer: "Clearway", make: "Muller", model: "Canalmaster F160", regPlate: "FG70 RXY", buildNumber: "11944000", deliveryDate: "to be updated" },
            { customer: "Convertwater", make: "Muller", model: "Frontliner", regPlate: "FJ71 SKZ", buildNumber: "12041100", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster PVT700 F150 E", regPlate: "FJ72 PKN", buildNumber: "12042600", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster CM F160 E rec. type I", regPlate: "FE21 WBZ", buildNumber: "12042700", deliveryDate: "to be updated" },
            { customer: "Clearway", make: "Muller", model: "Canalmaster CM F160 E rec. type I", regPlate: "FE21 VWV", buildNumber: "12042800", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster F160 E", regPlate: "FJ72 SLZ", buildNumber: "12142500", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ22 RDU", buildNumber: "12140700", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F150 E", regPlate: "FJ68 XGW", buildNumber: "11841000", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CM F160 rec. type I", regPlate: "FJ72 SFV", buildNumber: "12140900", deliveryDate: "to be updated" },
            { customer: "SWD", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ72 SRY", buildNumber: "12141000", deliveryDate: "to be updated" },
            { customer: "Drain Technology", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "N99 DTL", buildNumber: "12043300", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF 60 E rec. type I Agromover", regPlate: "FE22 WBJ", buildNumber: "12140500", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ72 SWW", buildNumber: "12141100", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ72 SWX", buildNumber: "12141200", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ22 TBZ", buildNumber: "12141300", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ22 TBZ", buildNumber: "12141400", deliveryDate: "to be updated" },
            { customer: "Drainforce", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ23 SJX", buildNumber: "12141500", deliveryDate: "to be updated" },
            { customer: "Sapphire Utility solutions", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ23 SRV", buildNumber: "12141600", deliveryDate: "to be updated" },
            { customer: "Cargate Engineering", make: "Muller", model: "CF160 E rec. type I", regPlate: "MR23 BUH", buildNumber: "12141700", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ23 SRU", buildNumber: "12141800", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ23 SXV", buildNumber: "12141900", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ23 TBX", buildNumber: "12142000", deliveryDate: "to be updated" },
            { customer: "CES Environmental Services", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "231-CE-1759", buildNumber: "12043200", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ23 SRO", buildNumber: "12043100", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "Canalmaster F160 E rec. type I", regPlate: "FJ23 SWU", buildNumber: "12043000", deliveryDate: "to be updated" },
            { customer: "Telcoss", make: "Muller", model: "Canalmaster F130 rec. type I", regPlate: "FJ23 SKX", buildNumber: "12144000", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "Canalmaster F130 E", regPlate: "222-CN-525", buildNumber: "12143200", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF60 Rec. type I", regPlate: "FJ23 TCV", buildNumber: "12140600", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster F130 E", regPlate: "FJ73 SNZ", buildNumber: "12240700", deliveryDate: "to be updated" },
            { customer: "Clearway", make: "Muller", model: "CF 160 E rec. type I - Samson Pump", regPlate: "FJ23 SWO", buildNumber: "12042900", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I - Samson Pump", regPlate: "FJ23 SXW", buildNumber: "12142100", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I - Samson Pump", regPlate: "FJ23 TDX", buildNumber: "12142200", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Muller", model: "CF160 E", regPlate: "MB54 BER", buildNumber: "12142300", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "FJ73 TFU", buildNumber: "12142400", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "FJ73 SVR", buildNumber: "12142600", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "FJ73 SWU", buildNumber: "12142700", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ73 TFO", buildNumber: "12147000", deliveryDate: "to be updated" },
            { customer: "Convertwater", make: "Muller", model: "CF150 E", regPlate: "FP73 GHD", buildNumber: "12142900", deliveryDate: "to be updated" },
            { customer: "Mantank", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ73 SXM", buildNumber: "12144600", deliveryDate: "to be updated" },
            { customer: "Merkland Tank", make: "Muller", model: "CF160 E rec. type I", regPlate: "FP73 GFA", buildNumber: "12144700", deliveryDate: "to be updated" },
            { customer: "Intech Environmental", make: "Muller", model: "CF160 E", regPlate: "FP73 EXD", buildNumber: "12142800", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF150 E", regPlate: "FP73 EXF", buildNumber: "12143000", deliveryDate: "to be updated" },
            { customer: "Cargate Engineering", make: "Muller", model: "CF160 E rec. type I", regPlate: "MR73 JET", buildNumber: "12147100", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ24 SXA", buildNumber: "12147200", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "PO24 BZG", buildNumber: "12147300", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "FP73 EXH", buildNumber: "12144800", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "FP73 GFE", buildNumber: "12144900", deliveryDate: "to be updated" },
            { customer: "Sapphire Utility solutions", make: "Muller", model: "CF160 E rec. type I", regPlate: "FP73 GBF", buildNumber: "12145000", deliveryDate: "to be updated" },
            { customer: "Sapphire Utility solutions", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ24 SWK", buildNumber: "12145100", deliveryDate: "to be updated" },
            { customer: "Sapphire Utility solutions", make: "Muller", model: "CF160 E rec. type I", regPlate: "FJ24 SWK", buildNumber: "12145100", deliveryDate: "to be updated" },
            { customer: "Glanville Environmental", make: "Muller", model: "CF160 E rec. type I RRC + 160m hose", regPlate: "FJ24 SRY", buildNumber: "12145200", deliveryDate: "to be updated" },
            { customer: "Glanville Environmental", make: "Muller", model: "CF160 E rec. type I RRC + 160m hose", regPlate: "FJ24 SNZ", buildNumber: "12145600", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I", regPlate: "FP24 KBK", buildNumber: "12145300", deliveryDate: "to be updated" },
            { customer: "TT Industrial", make: "Muller", model: "CF160 E rec. type I", regPlate: "FG24 ZNB", buildNumber: "12145400", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I", regPlate: "FL24 HDY", buildNumber: "12145500", deliveryDate: "to be updated" },
            { customer: "Claret Civil Engineering Ltd", make: "Muller", model: "CF160 E", regPlate: "PN24 BUP", buildNumber: "12146500", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "PN24 BWZ", buildNumber: "12146600", deliveryDate: "to be updated" },
            { customer: "Munster Drain", make: "Muller", model: "CF160 E rec. type I", regPlate: "PN24 BWY", buildNumber: "12145800", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "SG74 DLJ", buildNumber: "12145900", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I", regPlate: "PO74 ZVF", buildNumber: "12146000", deliveryDate: "to be updated" },
            { customer: "Cork Drain Cleaning", make: "Muller", model: "CF160 E rec. type I", regPlate: "241-C-11337", buildNumber: "12144100", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Muller", model: "CF130 E", regPlate: "241-CN-1197", buildNumber: "12144200", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF130 E rec. type I", regPlate: "FJ74 RYV", buildNumber: "12144400", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E rec. type I", regPlate: "PO74 ZRK", buildNumber: "12146100", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "PO74 ZRK", buildNumber: "12147400", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "SG74 DKK", buildNumber: "12146200", deliveryDate: "to be updated" },
            { customer: "Cork Drain Cleaning", make: "Muller", model: "CF130 E rec. type I", regPlate: "FJ74 ROH", buildNumber: "12144300", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "FJ74 RKE", buildNumber: "12043500", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF145 E", regPlate: "FJ74 RNF", buildNumber: "12146300", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "to be updated", buildNumber: "12146400", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "CF160 E", regPlate: "to be updated", buildNumber: "12146700", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Muller", model: "Canalmaster 50 E rec. type I 4X4 Agromover", regPlate: "to be updated", buildNumber: "12148600", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Muller", model: "CMF170 K rec. type II Frontliner", regPlate: "to be updated", buildNumber: "12242500", deliveryDate: "to be updated" },
            { customer: "Clearway", make: "Muller", model: "CF160 E type I - RRC, Samson Pump and high doors", regPlate: "to be updated", buildNumber: "12043400", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Muller", model: "CF160 E rec. type I", regPlate: "to be updated", buildNumber: "12145700", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Rolba Super Combi", regPlate: "AE64 HPA", buildNumber: "15218", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Rolba", model: "Rolba Super Combi", regPlate: "SJ17 SYZ", buildNumber: "15253", deliveryDate: "to be updated" },
            { customer: "Telcoss", make: "Rolba", model: "Medium Combi", regPlate: "SJ16 NXA", buildNumber: "1803", deliveryDate: "to be updated" },
            { customer: "IDS Intelligent Drainage Solutions", make: "Rolba", model: "Medium Combi", regPlate: "FN64 PNZ", buildNumber: "1760", deliveryDate: "to be updated" },
            { customer: "CPJ Environmental Services", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "1780", deliveryDate: "to be updated" },
            { customer: "CPJ Environmental Services", make: "Rolba", model: "Medium Combi", regPlate: "CJ16 CPJ", buildNumber: "1801", deliveryDate: "to be updated" },
            { customer: "CPJ Environmental Services", make: "Rolba", model: "Medium Combi", regPlate: "CJ17 CPJ", buildNumber: "1812", deliveryDate: "to be updated" },
            { customer: "CPJ Environmental Services", make: "Rolba", model: "Medium Combi", regPlate: "FJ20 PLV", buildNumber: "1842", deliveryDate: "to be updated" },
            { customer: "PRB Drainage Ltd", make: "Rolba", model: "Medium Combi", regPlate: "AY67 WHW", buildNumber: "1843", deliveryDate: "to be updated" },
            { customer: "Slicker Recycling", make: "Rolba", model: "Medium Combi", regPlate: "AY18 LZS", buildNumber: "1858", deliveryDate: "to be updated" },
            { customer: "Slicker Recycling", make: "Rolba", model: "Medium Combi", regPlate: "AY18 LZR", buildNumber: "1859", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "1897", deliveryDate: "to be updated" },
            { customer: "Slicker", make: "Rolba", model: "Medium Combi", regPlate: "FD68 EFX", buildNumber: "1904", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Rolba", model: "Medium Combi", regPlate: "SF69 YKB", buildNumber: "1912", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Rolba", model: "Rolba Super Combi", regPlate: "SJ19 KFK", buildNumber: "1912", deliveryDate: "to be updated" },
            { customer: "Telcoss", make: "Rolba", model: "Medium Combi", regPlate: "FJ69 RFE", buildNumber: "1930", deliveryDate: "to be updated" },
            { customer: "Clare Drains", make: "Rolba", model: "Medium Combi", regPlate: "221-CE-1235", buildNumber: "1974", deliveryDate: "to be updated" },
            { customer: "Clare Drains", make: "Rolba", model: "Medium Combi", regPlate: "201-CE-1466", buildNumber: "1934", deliveryDate: "to be updated" },
            { customer: "William Gilder Ltd", make: "Rolba", model: "Medium Combi", regPlate: "221-CE-1613", buildNumber: "1962", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "Rolba", model: "Medium Combi", regPlate: "V2 BBT", buildNumber: "1941", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "Rolba", model: "Medium Combi", regPlate: "V3 BBT", buildNumber: "1942", deliveryDate: "to be updated" },
            { customer: "William Gilder Ltd", make: "Rolba", model: "Medium Combi", regPlate: "FJ21 UJD", buildNumber: "1961", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Rolba", model: "Medium Combi", regPlate: "FJ71 TCZ", buildNumber: "2006", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Rolba", model: "Medium Combi", regPlate: "FJ71 TCZ", buildNumber: "2006", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Rolba", model: "Medium Combi", regPlate: "SJ71 BBX", buildNumber: "2007", deliveryDate: "to be updated" },
            { customer: "Eurotank", make: "Rolba", model: "Medium Combi", regPlate: "FJ71 SUX", buildNumber: "2011", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Rolba", model: "Medium Combi", regPlate: "221-CN-741", buildNumber: "2015", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Rolba", model: "Medium Combi", regPlate: "FJ22 RCV", buildNumber: "2016", deliveryDate: "to be updated" },
            { customer: "Eurotank", make: "Rolba", model: "Medium Combi", regPlate: "FJ22 PHX", buildNumber: "2018", deliveryDate: "to be updated" },
            { customer: "Eurotank", make: "Rolba", model: "Medium Combi", regPlate: "FJ22 PLU", buildNumber: "2019", deliveryDate: "to be updated" },
            { customer: "Clare Drains", make: "Rolba", model: "Medium Combi", regPlate: "222-CE-594", buildNumber: "2024", deliveryDate: "to be updated" },
            { customer: "Eurotank", make: "Rolba", model: "Medium Combi", regPlate: "FJ72 TAV", buildNumber: "2036", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Rolba", model: "Medium Combi", regPlate: "FJ72 SUU", buildNumber: "2042", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Rolba", model: "Medium Combi", regPlate: "FJ72 SXN", buildNumber: "2049", deliveryDate: "to be updated" },
            { customer: "Convertwater", make: "Rolba", model: "Medium Combi", regPlate: "FJ23 SUU", buildNumber: "2078", deliveryDate: "to be updated" },
            { customer: "Convertwater", make: "Rolba", model: "Medium Combi PED", regPlate: "FP73 EXC", buildNumber: "2079", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Rolba", model: "Medium Combi", regPlate: "FJ24 SWV", buildNumber: "2092", deliveryDate: "to be updated" },
            { customer: "Trade Effluent Services Ltd", make: "Rolba", model: "Medium Combi", regPlate: "FJ24 SWZ", buildNumber: "2093", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Rolba", model: "Medium Combi ADR", regPlate: "SG24 URX", buildNumber: "2087", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Rolba", model: "Medium Combi ADR", regPlate: "PN24 CKO", buildNumber: "2088", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi ADR", regPlate: "FD24 ZPH", buildNumber: "2108", deliveryDate: "to be updated" },
            { customer: "CES Environmental Services", make: "Rolba", model: "Medium Combi", regPlate: "242-CE-998", buildNumber: "2110", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Rolba", model: "Medium Combi", regPlate: "FJ74 RVX", buildNumber: "2111", deliveryDate: "to be updated" },
            { customer: "Clare Drains", make: "Rolba", model: "Medium Combi ADR", regPlate: "to be updated", buildNumber: "2115", deliveryDate: "to be updated" },
            { customer: "Clearwater", make: "Rolba", model: "Super Combi", regPlate: "SN74 YUG", buildNumber: "15352", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Rolba", model: "Medium Combi ADR", regPlate: "SL74 WJV", buildNumber: "2109", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Rolba", model: "Medium Combi", regPlate: "FJ74 RKU", buildNumber: "2128", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Rolba", model: "Medium Combi", regPlate: "FJ74 RKA", buildNumber: "2129", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "2130", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "2131", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "2132", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi ADR", regPlate: "to be updated", buildNumber: "2133", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "2142", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi ADR", regPlate: "to be updated", buildNumber: "2143", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "2144", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "2134", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi", regPlate: "to be updated", buildNumber: "2135", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Rolba", model: "Medium Combi ADR", regPlate: "to be updated", buildNumber: "2145", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Gamon", model: "Pac-9 UK", regPlate: "to be updated", buildNumber: "065.04.19.18", deliveryDate: "to be updated" },
            { customer: "ROE Environmental", make: "Gamon", model: "Pac-9 UK", regPlate: "X10 ROE", buildNumber: "061.22.52.17", deliveryDate: "to be updated" },
            { customer: "ROE Environmental", make: "Gamon", model: "Pac-15 Uk", regPlate: "V6 ROE", buildNumber: "060.21.52.17", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Gamon", model: "Pac-15 UK 6", regPlate: "AY18 GWX", buildNumber: "070.09.27.18", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Gamon", model: "Pac-18 UK", regPlate: "FN68 VKX", buildNumber: "074.13.31.18", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "Gamon", model: "Pac-10 UK", regPlate: "OE68 BEY", buildNumber: "071.10.28.15", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "Gamon", model: "Pac-15 UK 8", regPlate: "FJ19 NAA", buildNumber: "079.18.41.18", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Gamon", model: "Pac-18 UK", regPlate: "to be updated", buildNumber: "084.23.50.18", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Gamon", model: "Pac-18 UK", regPlate: "to be updated", buildNumber: "000.00.00.01", deliveryDate: "to be updated" },
            { customer: "Convertwater", make: "Gamon", model: "UK 14", regPlate: "FJ71 SUV", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "UK 11", regPlate: "FJ71 SHZ", buildNumber: "149.15.25.21", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "UK 12", regPlate: "FJ71 SJO", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Gamon", model: "UK 13", regPlate: "FJ71 SRV", buildNumber: "153.19.30.21", deliveryDate: "to be updated" },
            { customer: "Convertwater", make: "Gamon", model: "Gamvac", regPlate: "FJ21 UPC", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "Gamon", model: "Gamon", regPlate: "to be updated", buildNumber: "161.27.48.21", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Gamon", model: "Gamvac Plus UK 16", regPlate: "FJ72 TCO", buildNumber: "190.32.48.22", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Gamon", model: "Gamvac Plus UK 15", regPlate: "FJ23 SSK", buildNumber: "189.31.47.22", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 17", regPlate: "FJ23 SRX", buildNumber: "195.33.49.22", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 18", regPlate: "FJ23 SRY", buildNumber: "197.25.50.22", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "Gamon", model: "Gamvac Plus UK 19", regPlate: "FJ23 SRZ", buildNumber: "199.26.52.22", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 20", regPlate: "PN24 CTU", buildNumber: "253.13.15.24", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 21", regPlate: "PN24 COA", buildNumber: "254.14.16.24", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 22", regPlate: "PN24 CKP", buildNumber: "255.15.17.24", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 23", regPlate: "SG24 USC", buildNumber: "256.16.19.24", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 24", regPlate: "PN24 CTF", buildNumber: "257.17.20.24", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 25", regPlate: "FL74 RTU", buildNumber: "276.36.51.24", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 26", regPlate: "FL74 JPX", buildNumber: "277.37.51.24", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 27", regPlate: "FL74 JYK", buildNumber: "278.01.02.25", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 28", regPlate: "FL74 RSZ", buildNumber: "279.02.03.25", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 29", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 30", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 31", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 32", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 33", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 34", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 35", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 36", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 37", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 38", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 39", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "Gamon", model: "Gamvac Plus UK 40", regPlate: "to be updated", buildNumber: "to be updated", deliveryDate: "to be updated" },
            { customer: "Basement Pumps", make: "VJ Engineering", model: "4K Tanker", regPlate: "FN21 EXX", buildNumber: "VJE0383", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "VJ Engineering", model: "4K Tanker", regPlate: "FN21 ERV", buildNumber: "VJE0384", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "2K Tanker", regPlate: "LF29 OFA", buildNumber: "VJE0400", deliveryDate: "to be updated" },
            { customer: "AA Turner Tankers", make: "VJ Engineering", model: "4K Tanker", regPlate: "FN71 BPX", buildNumber: "VJE0401", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "VJ Engineering", model: "4K Tanker", regPlate: "FJ71 BPY", buildNumber: "VJE0404", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "VJ Engineering", model: "4K Tanker", regPlate: "to be updated", buildNumber: "VJE0405", deliveryDate: "to be updated" },
            { customer: "Drain Technology", make: "VJ Engineering", model: "4K Tanker", regPlate: "FJ71 SNF", buildNumber: "VJE0429", deliveryDate: "to be updated" },
            { customer: "McBreen Environmental", make: "VJ Engineering", model: "4200 Gallon Vacuum Waste Tanker", regPlate: "FP71 OZR", buildNumber: "VJE0430", deliveryDate: "to be updated" },
            { customer: "Taylors Industrial Services", make: "VJ Engineering", model: "4200 Gallon Non-Hazardous Vacuum Waste Tanker", regPlate: "FJ72 SVA", buildNumber: "VJE0433", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "VJ Engineering", model: "4200 Gallon Non-Hazardous Vacuum Waste Tanker", regPlate: "FJ72 SDZ", buildNumber: "VJE0434", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "VJ Engineering", model: "4200 Gallon Vacuum Waste Tanker", regPlate: "FE22 VKV", buildNumber: "VJE0436", deliveryDate: "to be updated" },
            { customer: "JWJS", make: "VJ Engineering", model: "4200 Gallon Non-Hazardous Vacuum Waste Tanker", regPlate: "FJ72 SRU", buildNumber: "VJE0437", deliveryDate: "to be updated" },
            { customer: "John Coakley", make: "VJ Engineering", model: "3K Tanker", regPlate: "231-KE-448", buildNumber: "VJE0438", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "VJ Engineering", model: "4200 Gallon Vacuum Waste Tanker", regPlate: "FE22 VKU", buildNumber: "VJE0440", deliveryDate: "to be updated" },
            { customer: "Glanville Environmental", make: "VJ Engineering", model: "2200 Gallon Non-Hazardous Vacuum Waste Tanker", regPlate: "FN72 BHW", buildNumber: "VJE0473", deliveryDate: "to be updated" },
            { customer: "Clare Drains", make: "VJ Engineering", model: "4200 Gallon Non-Hazardous Vacuum Waste Tanker", regPlate: "FL22 OFH", buildNumber: "VJE0476", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SKU", buildNumber: "VJE0477", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SKV", buildNumber: "VJE0487", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SXR", buildNumber: "VJE0489", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SXS", buildNumber: "VJE0491", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SXT", buildNumber: "VJE0492", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SXU", buildNumber: "VJE0506", deliveryDate: "to be updated" },
            { customer: "Drainforce", make: "VJ Engineering", model: "2200 Gallon Vacuum Waste Tanker", regPlate: "FJ72 SUO", buildNumber: "VJE0507", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SWK", buildNumber: "VJE0512", deliveryDate: "to be updated" },
            { customer: "Adler & Allan Environmental", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ23 SWN", buildNumber: "VJE0518", deliveryDate: "to be updated" },
            { customer: "AA Turner Tankers", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ73 PVN", buildNumber: "VJE0524", deliveryDate: "to be updated" },
            { customer: "Tapthat Plumbers", make: "VJ Engineering", model: "2200 Gallon Tanker", regPlate: "PN73 KFF", buildNumber: "VJE0525", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ73 SVO", buildNumber: "VJE0530", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ73 SVP", buildNumber: "VJE0536", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "VJ Engineering", model: "2200 Gallon Tanker", regPlate: "PN73 KFG", buildNumber: "VJE0540", deliveryDate: "to be updated" },
            { customer: "CES Evironmental Services", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "241-CE-544", buildNumber: "VJE0545", deliveryDate: "to be updated" },
            { customer: "Prodrainage Tanker Services", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "PR07 ANK", buildNumber: "VJE0546", deliveryDate: "to be updated" },
            { customer: "Glanville Environmental", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "PN73 JVE", buildNumber: "VJE0547", deliveryDate: "to be updated" },
            { customer: "Elliot Environmental", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "PN73 JVF", buildNumber: "VJE0549", deliveryDate: "to be updated" },
            { customer: "Bull Tankers", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "PN73 JVG", buildNumber: "VJE0550", deliveryDate: "to be updated" },
            { customer: "Prodrainage Tanker Services", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "PO05 VAC", buildNumber: "VJE0553", deliveryDate: "to be updated" },
            { customer: "Drain Technology", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FL73 RXT", buildNumber: "VJE0557", deliveryDate: "to be updated" },
            { customer: "Ultraflow Drainage Maintenance Solutions", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "PL73 VFW", buildNumber: "VJE0558", deliveryDate: "to be updated" },
            { customer: "Ultraflow Drainage Maintenance Solutions", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "PL73 VFX", buildNumber: "VJE0560", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "VJ Engineering", model: "2200 Gallon Tanker", regPlate: "PN24 CMK", buildNumber: "VJE0569", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "VJ Engineering", model: "4200 Gallon Tanker ADR - Volvo", regPlate: "SJ24 GUW", buildNumber: "VJE0576-1", deliveryDate: "to be updated" },
            { customer: "Enviro-Clean", make: "VJ Engineering", model: "4200 Gallon Tanker ADR - Volvo", regPlate: "SJ24 GUX", buildNumber: "VJE0576-2", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "PN24 CPV", buildNumber: "VJE0572-1", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "PN24 CNV", buildNumber: "VJE0572-2", deliveryDate: "to be updated" },
            { customer: "Denholm", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "PN24 JYX", buildNumber: "VJE0566", deliveryDate: "to be updated" },
            { customer: "GC Pumps", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "HG24 LCM", buildNumber: "VJE0567", deliveryDate: "to be updated" },
            { customer: "Denholm", make: "VJ Engineering", model: "ADR Tipper 4K Tanker - Volvo", regPlate: "SJ24 GUU", buildNumber: "VJE0576-3", deliveryDate: "to be updated" },
            { customer: "Future Industrial", make: "VJ Engineering", model: "ADR Tipper 4K Tanker - Volvo", regPlate: "SJ24 GUO", buildNumber: "VJE0576-4", deliveryDate: "to be updated" },
            { customer: "Endurance Vehicle Solutions", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FD24 WWB", buildNumber: "VJE0585", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ74 RYW", buildNumber: "VJE0586", deliveryDate: "to be updated" },
            { customer: "Wessex Water", make: "VJ Engineering", model: "3000 Gallon - Wessex spec", regPlate: "GN74 XJB", buildNumber: "VJE0583", deliveryDate: "to be updated" },
            { customer: "Peachy Services", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ74 RXK", buildNumber: "VJE0589-1", deliveryDate: "to be updated" },
            { customer: "DH Drainage", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ74 RYG", buildNumber: "VJE0589-2", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "PN74 FZM", buildNumber: "VJE0590", deliveryDate: "to be updated" },
            { customer: "Chesterdield Environmental", make: "VJ Engineering", model: "4200 Tanker - Chesterfield Spec", regPlate: "FJ74 SBZ", buildNumber: "VJE0591", deliveryDate: "to be updated" },
            { customer: "Wessex Water", make: "VJ Engineering", model: "3000 Gallon - Wessex spec", regPlate: "to be updated", buildNumber: "VJE0603-1", deliveryDate: "to be updated" },
            { customer: "Wessex Water", make: "VJ Engineering", model: "3000 Gallon - Wessex spec", regPlate: "to be updated", buildNumber: "VJE0603-2", deliveryDate: "to be updated" },
            { customer: "Wessex Water", make: "VJ Engineering", model: "3000 Gallon - Wessex spec", regPlate: "to be updated", buildNumber: "VJE0603-3", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0592", deliveryDate: "to be updated" },
            { customer: "Rescue Rod Ltd", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ74 RZP", buildNumber: "VJE0598", deliveryDate: "to be updated" },
            { customer: "Avalon Waste Management", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "PN74 GYA", buildNumber: "VJE0604-1", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0604-2", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ74 RVC", buildNumber: "VJE0605-1", deliveryDate: "to be updated" },
            { customer: "Lanes Group PLC", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "FJ74 RVV", buildNumber: "VJE0605-2", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0597", deliveryDate: "to be updated" },
            { customer: "Endurance Vehicle Solutions", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0618", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0619", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "VJ Engineering", model: "3000 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0616", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0622-1", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0622-2", deliveryDate: "to be updated" },
            { customer: "to be updated", make: "VJ Engineering", model: "to be updated", regPlate: "to be updated", buildNumber: "VJE0625", deliveryDate: "to be updated" },
            { customer: "Billy Bowie", make: "VJ Engineering", model: "4200 Gallon Tanker", regPlate: "to be updated", buildNumber: "VJE0606", deliveryDate: "to be updated" },
];

const tableBody = document.getElementById("truckTable");

// Render the table
function renderTable() {
    tableBody.innerHTML = ""; // Clear table
    trucks.forEach(truck => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${truck.customer}</td>
            <td>${truck.make}</td>
            <td>${truck.model}</td>
            <td>${truck.regPlate}</td>
            <td>${truck.buildNumber}</td>
            <td>${truck.deliveryDate}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Sort function for table data
function sortTable(column, order = "asc") {
    trucks.sort((a, b) => {
        if (column === "deliveryDate") {
            const dateA = new Date(a[column] || "2999-12-31");
            const dateB = new Date(b[column] || "2999-12-31");
            return order === "asc" ? dateA - dateB : dateB - dateA;
        }
        if (column === "buildNumber") {
            const numA = parseInt(a[column].replace(/\D/g, ""), 10) || 0; // Handle non-numeric build numbers
            const numB = parseInt(b[column].replace(/\D/g, ""), 10) || 0;
            return order === "asc" ? numA - numB : numB - numA;
        }
        return order === "asc"
            ? (a[column] || "").localeCompare(b[column] || "")
            : (b[column] || "").localeCompare(a[column] || "");
    });
    renderTable();
}

function renderTable() {
    tableBody.innerHTML = ""; // Clear table
    trucks.forEach(truck => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${truck.customer}</td>
            <td>${truck.make}</td>
            <td>${truck.model}</td>
            <td>${truck.regPlate}</td>
            <td>${truck.buildNumber}</td>
            <td>${truck.deliveryDate}</td>
        `;
        tableBody.appendChild(row);
    });
}


function handleSort() {
    const sortOption = document.getElementById("sortOptions").value;
    const [column, order] = sortOption.split("-");
    sortTable(column, order);
}

// Filter function for table
function filterTable() {
    const customerFilter = document.getElementById("customerFilter").value.toLowerCase();
    const makeFilter = document.getElementById("makeFilter").value.toLowerCase();
    const yearFilter = document.getElementById("yearFilter").value;

    const rows = document.querySelectorAll("#truckTable tr");
    rows.forEach(row => {
        const cells = row.children;
        const customer = cells[0].textContent.toLowerCase();
        const make = cells[1].textContent.toLowerCase();
        const deliveryYear = cells[5].textContent.split("-")[0];

        const matchesCustomer = customer.includes(customerFilter) || customerFilter === "";
        const matchesMake = make.includes(makeFilter) || makeFilter === "";
        const matchesYear = deliveryYear.includes(yearFilter) || yearFilter === "";

        row.style.display = matchesCustomer && matchesMake && matchesYear ? "" : "none";
    });
}

// Automatically filter table when 'customer' query parameter exists
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const customerFilterParam = getQueryParam("customer");

if (customerFilterParam) {
    document.getElementById("customerFilter").value = customerFilterParam; // Pre-fill the filter input
    filterTable(); // Automatically apply the filter
}

// Initial rendering
trucks.sort((a, b) => a.customer.localeCompare(b.customer));
renderTable();