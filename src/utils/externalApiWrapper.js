import axios from "axios";

export const externalApiWrapper = async () => {
  try {
    const instance = axios.create({});
    return instance;
  } catch (error) {
    console.log(`Failed to instance external wrapper: ${error.message}`);
  }
};
