import React from "react";
import style from "./styles.module.css";
import mapbox from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapbox.accessToken =
      "pk.eyJ1IjoiZ2FsaW5hcyIsImEiOiJja2tkeDhncG0wMnR6MnVuN3JzNnJueGI4In0.UClLuWVi6q2QiOpI7LASQQ";

    this.map = new mapbox.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      antialias: true,
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  }

  setFinishDot(dot) {
    if (this.map.getLayer("end-1")) {
      this.map.removeLayer("end-1");
    }
    if (this.map.getLayer("end-2")) {
      this.map.removeLayer("end-2");
    }
    if (this.map.getLayer("end-3")) {
      this.map.removeLayer("end-3");
    }
    if (this.map.getSource("circle-end")) {
      this.map.removeSource("circle-end");
    }

    if (!dot) {
      return;
    }

    this.map.addSource("circle-end", {
      type: "geojson",
      data: { type: "Feature", geometry: { type: "Point", coordinates: dot } },
    });
    this.map.addLayer({
      id: "end-1",
      type: "circle",
      source: "circle-end",
      paint: {
        "circle-color": "#91C523",
        "circle-radius": 9,
        "circle-pitch-scale": "viewport",
      },
    });
    this.map.addLayer({
      id: "end-2",
      type: "circle",
      source: "circle-end",
      paint: {
        "circle-color": "#91C523",
        "circle-radius": 18,
        "circle-opacity": 0.4,
      },
    });
    this.map.addLayer({
      id: "end-3",
      type: "circle",
      source: "circle-end",
      paint: {
        "circle-color": "#91C523",
        "circle-radius": 27,
        "circle-opacity": 0.2,
      },
    });
  }

  setStartDot(dot) {
    if (this.map.getLayer("start-1")) {
      this.map.removeLayer("start-1");
    }
    if (this.map.getLayer("start-2")) {
      this.map.removeLayer("start-2");
    }
    if (this.map.getLayer("start-3")) {
      this.map.removeLayer("start-3");
    }
    if (this.map.getSource("circle-start")) {
      this.map.removeSource("circle-start");
    }

    if (!dot) {
      return;
    }

    this.map.addSource("circle-start", {
      type: "geojson",
      data: { type: "Feature", geometry: { type: "Point", coordinates: dot } },
    });
    this.map.addLayer({
      id: "start-1",
      type: "circle",
      source: "circle-start",
      paint: {
        "circle-color": "#FDBF5A",
        "circle-radius": 9,
        "circle-pitch-scale": "viewport",
      },
    });
    this.map.addLayer({
      id: "start-2",
      type: "circle",
      source: "circle-start",
      paint: {
        "circle-color": "#FDBF5A",
        "circle-radius": 18,
        "circle-opacity": 0.4,
      },
    });
    this.map.addLayer({
      id: "start-3",
      type: "circle",
      source: "circle-start",
      paint: {
        "circle-color": "#FDBF5A",
        "circle-radius": 27,
        "circle-opacity": 0.2,
      },
    });

    this.map.flyTo({ center: dot, zoom: 15 });
  }

  setNewRoute(route) {
    if (this.map.getLayer("route")) {
      this.map.removeLayer("route");
    }
    if (this.map.getSource("route")) {
      this.map.removeSource("route");
    }

    if (!route.length || route.length < 2) {
      this.setStartDot();
      this.setFinishDot();
      this.map.flyTo({ center: [30.3056504, 59.9429126], zoom: 10 });
      return;
    }

    this.setStartDot(route[0]);
    this.setFinishDot(route[route.length - 1]);

    this.map.addSource("route", {
      type: "geojson",
      lineMetrics: true,
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      },
    });
    this.map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ffc617",
        "line-width": 4,
        "line-gradient": [
          "interpolate",
          ["linear"],
          ["line-progress"],
          0,
          "#FDBF5A",
          1,
          "#91C523",
        ],
      },
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    if (this.map.loaded()) {
      this.setNewRoute(this.props.route);
    } else {
      this.map.on("load", () => {
        this.setNewRoute(this.props.route);
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      // <div className={style.mapWrapper}>
      <div
        className={`${style.map} ${this.props.className || ""}`}
        ref={this.mapContainer}
      />
      // </div>
    );
  }
}
