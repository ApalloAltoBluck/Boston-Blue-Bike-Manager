import React from "react";
import { Link, HashRouter, useParams, Route } from "react-router-dom";
import bootstrap from "bootstrap";

import { findBikeById,  updateBike, deleteBike} from "./bike-services";

function BikeEdit() {
  const params = useParams();
  const [bike, setBike] = React.useState(null);

  React.useEffect(() => {
    findBikeById(params.id)
      .then((res) => setBike(res[0]))
  }, []);

  return (
    <header className="App-header">
      <h1>bike {params.id} EDIT</h1>
      {console.log(bike)}
      {!bike ? (
        "Loading..."
      ) : (
        <>
          <label for="inUse">In use?</label>
          <input
            type="text"
            id="text"
            type="number"

            name="inUse"
            defaultValue={bike.inUse}
            onChange={(e) =>
              setBike((bike) => ({
                ...bike,
                inUse: e.target.value,
              }))
            }
          />
          <br />
          <label for="lastName">User</label>
          <input
            name="user"
            type="number"

            defaultValue={bike.user}
            onChange={(e) =>
              setBike((bike) => ({
                ...bike,
                user: e.target.value,
              }))
            }
          />
          <br />
          <label for="station_id">Station ID</label>
          <input
            name="station_id"
            type="number"
            defaultValue={bike.station_id}
            onChange={(e) =>
              setBike((bike) => ({
                ...bike,
                station_id: e.target.value,
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
            onClick={() => deleteBike(params.id)}
          >
            DELETE
          </a>
          <a href="/"
            className="btn btn-primary"
            onClick={() => updateBike(params.id, bike)}
          >
            CONFIRM EDITS
          </a> 
          <a href="/">BACK</a>
        </>
      )}
    </header>
  );
}

export default BikeEdit;
