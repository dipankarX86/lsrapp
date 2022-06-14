import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter';

const API_URL = '/api/shops'
const API_URL_MORE = '/api/shops/'

// Create shop
const createShop = async (shopData) => {
  console.log(shopData)

  // 
  const options = {
    // preservedKeys: ['ownerAddrLine1', 'ownerAddrLine2'],
    ignoreHeaders: true
  };
  const client = applyCaseMiddleware(axios.create(), options);
  const response = await client.post(API_URL, shopData)
  // 

  console.log(response.data)
  return response.data
}

const shopService = {
  createShop
}

export default shopService
