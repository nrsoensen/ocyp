/* var ourLoc;
var view;
var map;


function init() {

	ourLoc = ol.proj.fromLonLat([-87.673119, 41.920974]);

	view = new ol.View({
		center: ourLoc,
		zoom: 5
	});

	map = new ol.Map({
		target: 'map',
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			}),
			addMarkers()
		],
		loadTilesWhileAnimating: true,
		view: view
	});
}

function addMarkers(){
	var iconFeatures=[];

	var iconFeature = new ol.Feature({
		geometry: new ol.geom.Point(ol.proj.transform([-87.673119, 41.920974], 'EPSG:4326',
		'EPSG:3857')),
		name: 'Null Island',
		population: 4000,
		rainfall: 500
	});

	var iconFeature1 = new ol.Feature({
		geometry: new ol.geom.Point(ol.proj.transform([-87.658689, 41.917837], 'EPSG:4326',
		'EPSG:3857')),
		name: 'Null Island Two',
		population: 4001,
		rainfall: 501
	});

	iconFeatures.push(iconFeature);
	iconFeatures.push(iconFeature1);

	var vectorSource = new ol.source.Vector({
		features: iconFeatures //add an array of features
	});

	var iconStyle = new ol.style.Style({
		image: new ol.style.Icon(/** @type {olx.style.IconOptions}  ({
			anchor: [0.5, 46],
			anchorXUnits: 'fraction',
			anchorYUnits: 'pixels',
			opacity: 0.75,
			src: 'data/icon.png'
		}))
	});


	var vectorLayer = new ol.layer.Vector({
		source: vectorSource,
		style: iconStyle
	});

	return vectorLayer;

}


window.onload = init;
*/
