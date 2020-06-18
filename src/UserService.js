<<<<<<< HEAD
const users = []

const addUser = (username) => {
  console.log("adding user " + username)
  if(verifyUser(username)) {
    users.push({
      username: username
    })
  }
}

const verifyUser = (username) => {
  for(var user in users) {
    if(user.username === username)
      return true
  }

  return false
}

export default {
  users,
  addUser,
  verifyUser
=======
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
>>>>>>> 704fbb55e30139e7225773f1705adaf30673b0d6
}