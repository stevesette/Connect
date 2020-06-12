const users = []

const addUser = (username) => {
  console.log("adding user " + username)
  if(!existingUser(username)) {
    users.push({
      username: username
    })
    console.log(users)
    return true
  } else {
    return false
  }
}

const existingUser = (username) => {
  const user = users.find((user) => user.username === username)
  console.log(user)

  if(user === undefined) {
    return false
  } else {
    return true
  }
}

export default {
  users,
  addUser,
  existingUser
}