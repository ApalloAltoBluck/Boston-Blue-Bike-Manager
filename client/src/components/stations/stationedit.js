import React from "react";
import { Link, HashRouter, useParams, Route } from "react-router-dom";
import bootstrap from "bootstrap";

import stationServices, { findStationById,  updateStation, deleteStation} from "./station-services.js";

function BikeEdit() {
  const params = useParams();
  const [station, setStation] = React.useState(null);

  React.useEffect(() => {
    findStationById(params.id)
      .then((res) => setStation(res[0]))
  }, []);

  return (
    <header className="App-header">
      <h1>Station {params.id} EDIT</h1>
      {console.log(station)}
      {!station ? (
        "Loading..."
      ) : (
        <>
           <label for="ex_id">External Id</label>
          <input
            type="text"
            id="text"
            name="exID"
            defaultValue={station.external_id}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                external_id: e.target.value,
              }))
            }
          />
          <br />
          <label for="ex_id">Name</label>
          <input
            type="text"
            id="text"
            name="Name"
            defaultValue={station.name_}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                name_: e.target.value,
              }))
            }
          />
            <br />
          <label for="ex_id">Short Name</label>
          <input
            type="text"
            id="text"
            name="Short Name"
            defaultValue={station.short_name}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                short_name: e.target.value,
              }))
            }
          />
            <br />
            <label for="ex_id">Capacity</label>
          <input
            type="number"
            id="text"
            name="Capacity"
            defaultValue={station.capacity}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                capacity: e.target.value,
              }))
            }
          />
            <br />
            <br />
          <label for="ex_id">LAT</label>
          <input
            type="text"
            id="text"
            name="lat"
            defaultValue={station.lat}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                lat: e.target.value,
              }))
            }
          />
          <br />
            <label for="ex_id">lon</label>
          <input
            type="text"
            id="text"
            name="lon"
            defaultValue={station.lon}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                lon: e.target.value,
              }))
            }
          />
            <br />
            <label for="ex_id">rental url</label>
          <input
            type="text"
            id="text"
            name="lon"
            defaultValue={station.rental_url}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                rental_url: e.target.value,
              }))
            }
          />
           <br />
            <label for="ex_id">station type</label>
          <input
            type="text"
            id="text"
            name="lon"
            defaultValue={station.station_type}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                station_type: e.target.value,
              }))
            }
          />

          
          <br />
          <label for="ex_id">electric bike surcharge waiver</label>
          <input
            type="text"
            id="text"
            name="electric_bike_surcharge_waiver"
            defaultValue={station.electric_bike_surcharge_waiver}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                electric_bike_surcharge_waiver: e.target.value,
              }))
            }
          />

<br />
          <label for="ex_id">eightd has key dispenser</label>
          <input
            type="number"
            id="text"
            name="electric_bike_surcharge_waiver"
            defaultValue={station.eightd_has_key_dispenser}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                eightd_has_key_dispenser: e.target.value,
              }))
            }
          />

          

<br />
          <label for="ex_id">region id</label>
          <input
            type="number"
            name="region id"
            defaultValue={station.region_id}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                region_id: e.target.region_id,
              }))
            }
          />

<br />
          <label for="ex_id">has kiosk</label>
          <input
            type="number"
            id="text"
            name="has kiosk"
            defaultValue={station.has_kiosk}
            onChange={(e) =>
              setStation((station) => ({
                ...station,
                has_kiosk: e.target.value,
              }))
            }
          />

            <br />
<tr>
            <th>{}</th>
            <th>{}</th>
          </tr>
        
          <a
            href="/"
            className="btn btn-DANGER"
            onClick={() => deleteStation(params.id)}
          >
            DELETE
          </a>
          <a href="/"
            className="btn btn-primary"
            onClick={() => updateStation(params.id, station)}
          >
            CONFIRM EDITS
          </a> 
          <a href="/">BACK</a> 
        </>)}
    </header>
  );
}

export default BikeEdit;
