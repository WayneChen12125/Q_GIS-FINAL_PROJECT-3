var size = 0;
var placement = 'point';

var style_2021_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("台中地價");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 25000.000000 && value <= 40000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(196,195,197,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 40000.000000 && value <= 60000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,227,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 60000.000000 && value <= 80000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(186,186,218,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 80000.000000 && value <= 100000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(140,136,191,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 100000.000000 && value <= 120000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(99,67,156,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 120000.000000 && value <= 129000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(63,0,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
