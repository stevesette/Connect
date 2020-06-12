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
}