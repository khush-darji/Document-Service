import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Define types for method and data parameters
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type DataType = Record<string, any>;

// Function to handle API calls
export const callApi = async (
  method: HttpMethod,
  url: string,
  data?: DataType
): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      data,
    };

    const response: AxiosResponse = await axios(config);

    // Ensure the response is successful (status code between 200 and 299)
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    // Handle Axios errors gracefully
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        throw new Error(
          `Request failed with status ${axiosError.response.status}`
        );
      } else if (axiosError.request) {
        // The request was made but no response was received
        throw new Error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an error
        throw new Error("Error setting up request");
      }
    } else {
      // Handle other types of errors
      throw new Error("Unexpected error occurred");
    }
  }
};
