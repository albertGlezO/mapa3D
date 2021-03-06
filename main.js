mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0Z2xleiIsImEiOiJjazc2aDl5dmEwMWlsM2twN3Ztd25xMTZuIn0.j18Pflmhfx2MI-xVRSQI8A';
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ubilabs/ciw7jzkux000i2qnu6blrgeks',
  center: [-99.040851172568, 26.4084410028821],
  zoom: 13,
  pitch: 60,
  bearing: 20,
  antialias: true
});

map.on('load', function() {
  map.addSource('floorplan', {
  // GeoJSON Data source used in vector tiles, documented at
  // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
  'type': 'geojson',
  'data': {
    "features": [
      {
        "type": "Feature",
        "properties": {
          "level": 1,
          "name": "Bird Exhibit",
          "height": 1000,
          "base_height": 0,
          "color": "orange"
        },
        "geometry": {
          "type": "MultiPolygon",
          "coordinates": [
            [
             [
              [-99.040851172568, 26.4060680737453],
              [-99.0408107462467, 26.4049976815784],
              [-99.0402663048457, 26.4050243662231],
              [-99.0402471664636, 26.4047537845967],
              [-99.0401265406476, 26.4047593729329],
              [-99.0401435321617, 26.4050325997247],
              [-99.0399445378075, 26.4050434249472],
              [-99.0399227905582, 26.4044562989966],
              [-99.0397957185307, 26.4044667553519],
              [-99.0398011988843, 26.4046881914158],
              [-99.0386311802437, 26.4047907140814],
              [-99.0384408867846, 26.4032781676287],
              [-99.0406471641107, 26.4035083048881],
              [-99.0413460936528, 26.4035817323003],
              [-99.0416106147104, 26.4035763543831],
              [-99.0418866918821, 26.4035594281125],
              [-99.0422262044258, 26.4034305571207],
              [-99.042592598137, 26.4032424529751],
              [-99.0429409461255, 26.4030454053693],
              [-99.0432546251366, 26.402883000844],
              [-99.0431268490087, 26.4048584728151],
              [-99.0430548249544, 26.4056010240822],
              [-99.0419910960301, 26.4058394306844],
              [-99.041438931576, 26.4059485376717],
              [-99.040851172568, 26.4060680737453]
             ]
            ],
            [
             [
              [-99.0404906993288, 26.4060239168747],
              [-99.040484711634, 26.4059533896718],
              [-99.0403582973554, 26.4059679931405],
              [-99.0403339070691, 26.4057660295083],
              [-99.0403960523183, 26.405748978317],
              [-99.0404365789056, 26.4057294998309],
              [-99.0404743998597, 26.4057002885799],
              [-99.0405014068057, 26.4056564801024],
              [-99.0405148983743, 26.4056005085488],
              [-99.0405116490619, 26.4055351052604],
              [-99.0404927555729, 26.4051176738827],
              [-99.0407212819266, 26.405094742514],
              [-99.0407726905619, 26.4060711355329],
              [-99.0389643387404, 26.4063987794016],
              [-99.0389589030232, 26.4062644854349],
              [-99.0404906993288, 26.4060239168747]
             ]
            ],
            [
             [
              [-99.0431830558361, 26.4058083766804],
              [-99.0432327672292, 26.4055539760571],
              [-99.0438102852354, 26.4055015501866],
              [-99.044373589464, 26.4053742077234],
              [-99.0451357064253, 26.4053215810664],
              [-99.0459306309798, 26.4050643698963],
              [-99.0465353322022, 26.4050107505407],
              [-99.0476274062367, 26.4047700350885],
              [-99.0477320485834, 26.4051581151472],
              [-99.0477016662453, 26.405381585383],
              [-99.0476116271869, 26.4055633879788],
              [-99.0472364596068, 26.4058784755344],
              [-99.0469102476579, 26.4060606518188],
              [-99.0466986214586, 26.4062118018288],
              [-99.0465099455479, 26.4068410897498],
              [-99.046462499753, 26.4069969555767],
              [-99.046323851397, 26.4072614736024],
              [-99.0461012379141, 26.4072914562205],
              [-99.0460329221489, 26.4072988408555],
              [-99.0459705449851, 26.4072597074492],
              [-99.0459537820624, 26.4072059954426],
              [-99.0458120100737, 26.407000737626],
              [-99.0456088363869, 26.4066231421182],
              [-99.0454365355862, 26.4063347063817],
              [-99.0449050215108, 26.4067234907357],
              [-99.0443372643629, 26.4056919833023],
              [-99.0431830558361, 26.4058083766804]
             ]
            ],
            [
             [
              [-99.0478452369068, 26.4051541569871],
              [-99.0477492962339, 26.4047543130485],
              [-99.0477669309124, 26.4046820961283],
              [-99.0478407362534, 26.4045416505083],
              [-99.0479392230749, 26.4044651144655],
              [-99.0480973590081, 26.4043880048745],
              [-99.0484483795567, 26.4053174565624],
              [-99.0490293649217, 26.4066636865324],
              [-99.0487836032028, 26.4068373903431],
              [-99.0484952211457, 26.4069065003582],
              [-99.0481841192381, 26.407132599014],
              [-99.0476422134154, 26.4075666880786],
              [-99.047270839338, 26.4077024073829],
              [-99.0471143211353, 26.4077213021462],
              [-99.0468952842517, 26.4077154739203],
              [-99.0467014238411, 26.4076320320942],
              [-99.0464386889795, 26.4073270337928],
              [-99.0466420589433, 26.4066628429416],
              [-99.0467488313802, 26.406280472958],
              [-99.0472213001767, 26.4060059194875],
              [-99.0476562343532, 26.4056522911614],
              [-99.0478057859756, 26.4054284283003],
              [-99.0478452369068, 26.4051541569871]
             ]
            ],
            [
             [
              [-99.0402528846275, 26.4059722452283],
              [-99.0391648140255, 26.406128517341],
              [-99.0391425558611, 26.4059116528314],
              [-99.0402381939897, 26.4057836294111],
              [-99.0402528846275, 26.4059722452283]
             ]
            ],
            [
             [
              [-99.0460638045083, 26.4084410028821],
              [-99.0458508956238, 26.4086840003502],
              [-99.0454254855343, 26.4089571858733],
              [-99.0425753112373, 26.4107433305339],
              [-99.0412248721422, 26.4112964619704],
              [-99.0398409709248, 26.4117525905559],
              [-99.037978794659, 26.4120632888604],
              [-99.0364952660484, 26.4121963043064],
              [-99.0367796558218, 26.4114627645607],
              [-99.0373582252086, 26.4107346969541],
              [-99.0362433863009, 26.4099590583275],
              [-99.0377463678736, 26.4078106757365],
              [-99.0385343451896, 26.4067973873978],
              [-99.038961603457, 26.4064439457033],
              [-99.043210138885, 26.405609382464],
              [-99.0431563312649, 26.405817184732],
              [-99.0443340058832, 26.4056985083121],
              [-99.0456098017034, 26.4080149791785],
              [-99.0460272120338, 26.4077014905607],
              [-99.0462436461619, 26.4079865832697],
              [-99.0460638045083, 26.4084410028821]
             ]
            ]
          ]
        },
        "id": "06e8fa0b3f851e3ae0e1da5fc17e111e"
      }
    ],
    "type": "FeatureCollection"
  }
  });
  map.addLayer({
    'id': 'room-extrusion',
    'type': 'fill-extrusion',
    'source': 'floorplan',
    'paint': {
    // See the Mapbox Style Specification for details on data expressions.
    // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions
    
    // Get the fill-extrusion-color from the source 'color' property.
    'fill-extrusion-color': ['get', 'color'],
    
    // Get fill-extrusion-height from the source 'height' property.
    'fill-extrusion-height': ['get', 'height'],
    
    // Get fill-extrusion-base from the source 'base_height' property.
    'fill-extrusion-base': ['get', 'base_height'],
    
    // Make extrusions slightly opaque for see through indoor walls.
    'fill-extrusion-opacity': 0.5
    }
  });
});