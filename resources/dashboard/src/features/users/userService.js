import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter';

const API_URL = '/api/users'

// Create user
const register = async (userData) => {
  // console.log(userData)
  // const response = await axios.post(API_URL, userData)
  // return response.data
  // 
  const options = {
    ignoreHeaders: true
  };
  const client = applyCaseMiddleware(axios.create(), options);
  const response = await client.post(API_URL, userData)
  // 
  console.log(response.data)
  return response.data
}

const userService = {
    register
}

export default userService
