import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// TO DO
// -turn each table into a react component that is fed a server response, and returns all values
// mapped over and stylized

export default function StationTable() {
  const [station, setStation] = React.useState(null);

  React.useEffect(() => {
    fetch("/stations")
      .then((res) => res.json())
      .then((dataStations) => setStation(dataStations.message));
  }, []);

  return (
    <div className="">
        {console.log(station)}
                <h1>
        STATIONS
        </h1>
        <table className="">
          <tr>
            <th>Station Id</th>
            <th>Exteneral Id</th>

            <th>Station in use</th>
            <th>SHORT NAME</th>
            <th>CAPACITY</th>
            <th>LAT</th>
            <th>LON</th>
            <th>rental url</th>
            <th>station type</th>
            <th>electric bike surcharge waiver</th>
            <th>key dispenser?</th>
            <th>region id </th>
            <th>has kiosk</th>
            <th>legacy id</th>

          </tr>
            {!station
              ? "Loading..."
              : Object.entries(station).map((keyName, i) => (
                    <tr>
                      <td>STATION {station[i].station_id} </td>
                      <td> {station[i].external_id} </td>
                      <td> {station[i].name_} </td>
                      <td> {station[i].short_name} </td>
                      <td> {station[i].capacity} </td>
                      <td> {station[i].lat} </td>
                      <td> {station[i].lon} </td>
                      <td> {station[i].rental_url} </td>
                      <td> {station[i].station_type} </td>
                      <td> {station[i].electric_bike_surcharge_waiver} </td>
                      <td> {station[i].eightd_has_key_dispenser} </td>
                      <td> {station[i].region_id} </td>
                      <td> {station[i].has_kiosk} </td>
                      <td> {station[i].legacy_id} </td>

                    </tr>
                ))}
        </table>
    </div>
  );
}
