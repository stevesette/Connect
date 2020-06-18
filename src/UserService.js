const addUser = (username, password) =>
  fetch("http://localhost:8080/api/register", {
      body: JSON.stringify({username: username, password: password}),
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


export default {
  addUser,
  loginUser
}