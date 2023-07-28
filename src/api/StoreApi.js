import axios from "axios";

export const getStores = async () => {
  try {
    const response = await axios.get(`https://my-json-server.typicode.com/evejin9/db-Dumpling/db`);
    
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};