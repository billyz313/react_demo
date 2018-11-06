import React, { Component } from "react";

export class Map extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div
          id="map"
          style={{ width: "100%", height: "calc( 100vh - 52px)" }}
        />
      </React.Fragment>
    );
  }
  componentDidMount() {
    let map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: "map",
      view: new ol.View({
        center: [0, 0],
        projection: "EPSG:3857",
        zoom: 4
      })
    });
  }
}
