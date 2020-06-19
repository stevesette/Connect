const addUser = (username, password, type) =>
  fetch("http://localhost:8080/api/register", {
      body: JSON.stringify({username: username, password: password, type: type}),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      credentials: "include"
    }).then(response => response.json())


const loginUser = (username, password) =>
  fetch("http://localhost:8080/api/login", {
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      credentials: "include"
    }).then(response => response.json())

const getAllUsers = () =>
  fetch("http://localhost:8080/api/users")
    .then(response => response.json())

const getCurrentUser = () =>
  fetch("http://localhost:8080/api/profile")
    .then(response => response.json())

const logout = () =>
  fetch("http://localhost:8080/api/logout")

const connect = (userId, connectedId) =>
  fetch("http://localhost:8080/api/connect", {
    body: JSON.stringify({user_id: userId, connected_id: connectedId}),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    credentials: "include"
  }).then(response => response.json())

export default {
  addUser,
  loginUser,
  getAllUsers,
  getCurrentUser,
  logout,
  connect
}