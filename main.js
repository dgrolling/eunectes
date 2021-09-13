require(["esri/Map",
    "esri/views/MapView",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/Graphic"
  ],
  (Map, MapView, Point, SimpleMarkerSymbol, Graphic) => {

    const map = new Map({
      basemap: "topo-vector",
    });

    const view = new MapView({
      container: "viewDiv", // Reference to the DOM node that will contain the view
      map: map, // References the map object created in step 3
      zoom: 9,
    });

    var pt = new Point({
      y: 38.997,
      x: -77.026
    });
    view.center = pt;

    var sym = new SimpleMarkerSymbol({
      color: "#A52A2A",
      style: "circle",
      size: 12
    });

    const pntAtt = {
      Name: "Silver Spring",
      State: "Maryland",
      County: "Montgomery",
      Population: "81,015 (2020)",
      Established: "1840",
      Area: "7.914 sq mi",
      Fact: "The community got its name from an 1840 discovery of a spring flowing with chips of mica, located in what is now the Acorn Park section of downtown Silver Spring."
    };

    var ptGraphic = new Graphic({
      geometry: pt,
      symbol: sym,
      attributes: pntAtt,
      popupTemplate: {
        title: "My hometown",
        content: [{
          type: "fields",
          fieldInfos: [{
              fieldName: "Name"
            },
            {
              fieldName: "State"
            },
            {
              fieldName: "County"
            },
            {
              fieldName: "Population"
            },
            {
              fieldName: "Established"
            },
            {
              fieldName: "Area"
            },
            {
              fieldName: "Fact"
            }
          ]
        }]
      }
    });

    view.graphics.add(ptGraphic);
  });
