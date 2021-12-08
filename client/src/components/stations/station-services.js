//  declare URL where server listens for HTTP requests
const STATIONS_URL = "/stations";

// retrieve all stations from the server
export const findAllStations = () =>
  fetch(STATIONS_URL).then((response) => response.json());

// TODO: retrieve a single stations by their ID
export const findStationById = (id) =>
  fetch(`${STATIONS_URL}/${id}`).then((response) => response.json());

// TODO: delete a stations by their ID
export const deleteStation = (id) =>
  fetch(`${STATIONS_URL}/${id}`, {
    method: "DELETE",
    body: { id: id },
  }).then((response) => response.json());

  // create a station 
export const createStation = (station) =>
  fetch(STATIONS_URL, {
    method: "POST",
    body: JSON.stringify(station),
    headers: { "content-type": "application/json" },
  }).then((response) => response.json());

// TODO: update a station by their ID
export const updateStation = (id, station) =>
  fetch(`${STATIONS_URL}/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify(station),
    headers: { "content-type": "application/json" },
  }).then((response) => response.json());

// TODO: export all functions as the API to this service
export default {
  findAllStations,
  findStationById,
  deleteStation,
  createStation,
  updateStation,
};
