function addEdificiosCapa() {

    map.addSource("edificios_source", {
        "type": "vector",
        "url": "mapbox://bernat-rc.48rwndrm"  // Nuestor ID Tileset

    }); //fin map source


    map.addLayer({
    "id": "edificios",
    "type": "fill-extrusion",
    "source": "edificios_source",
    "source-layer": "construcciones-87u1fn", // Nuestro nombre Tileset
    "maxzoom": 21,
    "minzoom": 15,
    "filter": [">", "numberOfFl", 0],
    "paint": {
        "fill-extrusion-color": [
            "interpolate", ["linear"], ["number", ["get", "numberOfFl"]],
            0, "#FFFFFF",
            1, "#e6b03d",
            3, "#e6b03d",
            6, "#3de66d",
            9, "#3de6b1",
            12, "#22ecf0",
            15, "#14b1fd",
            20, "#3d73e6",
            40, "#123a8f",
            60, "#ce2f7e",
            106, "#ff4d4d"

        ],
        "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            8, 0,
            12.5, 0,
            14, ["*", 1, ["to-number", ["get", "numberOfFl"]]],
            16, ["*", 1.5, ["to-number", ["get", "numberOfFl"]]],
            20, ["*", 2, ["to-number", ["get", "numberOfFl"]]]
        ],
        "fill-extrusion-opacity": 0.9
    }
}
,"road-label"
);  

} //fin funcion

function filtrarEdificios(valor) {
    map.setFilter("edificios", [">", "numberOfFl", parseInt(valor)]);

    document.getElementById("altura").innerHTML = "Més de  <b>" + valor + "</b> pisos";

}


function verTextos(valor){

    var estado = "visible";

    if(valor){
        estado = "visible";
    } else {
        estado = "none";
    }

    for (var i=0; i < map.getStyle().layers.length;i++){

        if(map.getStyle().layers[i].id.indexOf("label")!=-1){

            map.setLayoutProperty(map.getStyle().layers[i].id, "visibility", estado);
        }

    }


}


function addPopupToMapEdificios(edificios) {

    map.on('click', edificios, function (e) {

        var text = "";
        //console.info(e);
        for (key in e.features[0].properties) {

            if (key == "numberOfFl") {
                text += "<b>Numero de plantas</b>:" + e.features[0].properties[key] + "<br>";
            }
            if (key == "localId") {
                //localId 0004702DF3800C_part1
                //http://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=0004701DF3800C
                //https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaBienes.aspx?rc1=0004701&rc2=DF3800C

                var localId = e.features[0].properties[key];

                var localIdSplit = localId.split("_"); // 0004702DF3800C  part1
                var parte1 = localIdSplit[0].substring(0, 7);
                var parte2 = localIdSplit[0].substring(7, localIdSplit[0].length);
                text += "<img width=200 src=http://ovc.catastro.meh.es/OVCServWeb/OVCWcfLibres/OVCFotoFachada.svc/RecuperarFotoFachadaGet?ReferenciaCatastral=" + localId + "><br>";
                text += "<a target=blank href=https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCListaBienes.aspx?rc1=" + parte1 + "&rc2=" + parte2 + ">Ficha</a><br>";

            }


        }
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(text)
            .addTo(map);

    });

    map.on('mouseenter', edificios, function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', edificios, function () {
        map.getCanvas().style.cursor = '';
    });

}

function add3DICGC() {

    map.addSource('icgc-dem', {
        'type': 'raster-dem',
        "tiles": [
        "https://tilemaps.icgc.cat/tileserver/tileserver.php/terreny_icgc_2m_rgb/{z}/{x}/{y}.png"
      ],
        'tileSize': 512,
        'maxzoom': 14
    });

    map.setTerrain({
        'source': 'icgc-dem',
        'exaggeration': 1.5
    });


    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });

} //fin funcion