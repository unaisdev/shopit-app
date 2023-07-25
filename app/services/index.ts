import axios from 'axios';

// Customize the base URL for your API
const BASE_URL = 'http://10.0.2.2:4201';

const Service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Set the timeout for API requests (in milliseconds)
  // You can also add common headers or interceptors here if needed
});

export default Service;
