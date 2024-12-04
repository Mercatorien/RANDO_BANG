var wms_layers = [];


        var lyr_aa_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'aa_OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_trace_1 = new ol.format.GeoJSON();
var features_trace_1 = format_trace_1.readFeatures(json_trace_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trace_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trace_1.addFeatures(features_trace_1);
var lyr_trace_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trace_1, 
                style: style_trace_1,
                popuplayertitle: "trace",
                interactive: false,
                title: '<img src="styles/legend/trace_1.png" /> trace'
            });
var format_arrivee_depart_2 = new ol.format.GeoJSON();
var features_arrivee_depart_2 = format_arrivee_depart_2.readFeatures(json_arrivee_depart_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arrivee_depart_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arrivee_depart_2.addFeatures(features_arrivee_depart_2);cluster_arrivee_depart_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_arrivee_depart_2
});
var lyr_arrivee_depart_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_arrivee_depart_2, 
                style: style_arrivee_depart_2,
                popuplayertitle: "arrivee_depart",
                interactive: false,
                title: '<img src="styles/legend/arrivee_depart_2.png" /> arrivee_depart'
            });

lyr_aa_OpenStreetMap_0.setVisible(true);lyr_trace_1.setVisible(true);lyr_arrivee_depart_2.setVisible(true);
var layersList = [lyr_aa_OpenStreetMap_0,lyr_trace_1,lyr_arrivee_depart_2];
lyr_trace_1.set('fieldAliases', {'fid': 'fid', });
lyr_arrivee_depart_2.set('fieldAliases', {'fid': 'fid', 'Arrivee_depart': 'Arrivee_depart', });
lyr_trace_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_arrivee_depart_2.set('fieldImages', {'fid': '', 'Arrivee_depart': '', });
lyr_trace_1.set('fieldLabels', {'fid': 'no label', });
lyr_arrivee_depart_2.set('fieldLabels', {'fid': 'no label', 'Arrivee_depart': 'inline label - always visible', });
lyr_arrivee_depart_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});