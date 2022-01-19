var size = 0;
var placement = 'point';

var style_2021_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("台中人口");
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
    if (value >= 1.000000 && value <= 200.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,235,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 200.000000 && value <= 400.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,218,182,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 400.000000 && value <= 600.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,171,103,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 600.000000 && value <= 800.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,119,35,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 800.000000 && value <= 1000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,69,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1000.000000 && value <= 1138.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(127,39,4,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
