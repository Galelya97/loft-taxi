import React from "react";
import style from "./styles.module.css";
import mapbox from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { render } from "@testing-library/react";

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

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      // <div className={style.mapWrapper}>
      <div className={style.map} ref={this.mapContainer} />
      // </div>
    );
  }
}
