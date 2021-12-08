// TODO: declare URL where server listens for HTTP requests
const bikes_url = "/bikes"

// TODO: retrieve all users from the server
export const findAllBikes= () =>
    fetch(bikes_url)
    .then(response => response.json())


// TODO: retrieve a single user by their ID
export const findBikeById = (id) =>
    fetch(`${bikes_url}/${id}`)
    .then(response => response.json())



export const deleteBike = (id) =>
    fetch(`${bikes_url}/${id}`, {
      method: "DELETE",
      body: {id: id}
    }).then(response => response.json())


    export const createBike = (bike) =>
    fetch(bikes_url, {
      method: 'POST',
      body: JSON.stringify(bike),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a user by their ID
export const updateBike = (id, bike) =>
    fetch(`${bikes_url}/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify(bike),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
  findAllBikes,
  findBikeById,
  deleteBike,
  createBike,
  updateBike,

}
