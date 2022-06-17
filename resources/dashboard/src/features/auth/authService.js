import axios from 'axios'

const API_URL = '/api/users'

// Login user
const login = async (userData) => {
  // console.log(userData)
  
  const response = await axios.post(API_URL + '/login', userData)
  console.log(response.data)

  if(response.data) {
      localStorage.setItem('auth', JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => {
  localStorage.removeItem('auth')
  // we could use a server and http only cookie , but this a pretty introductory course
}

const userService = {
    login,
    logout
}

export default userService
