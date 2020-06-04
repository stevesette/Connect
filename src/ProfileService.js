
const findUser = (username) => {
  fetch("https://www.instagram.com/" + username + "/?__a=1")
    .then(response => response.json())
}

export default {
  findUser
}