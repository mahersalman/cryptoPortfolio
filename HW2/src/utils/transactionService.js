import { getUrlString } from '../utils/urlUtils';

// Service to fetch transactions from the network
export const fetchTransactions = async (network, address) => {
  const url = getUrlString(network, 'getAddressHistory', address); // Generate the URL for the request
  console.log("url" , url);
  const response = await fetch(url); // Make the HTTP request

  if (!response.ok) {
    throw new Error('Network response was not ok'); // Throw an error if the response is not OK
  }

  const json = await response.json(); // Parse JSON from the response
  return json.operations; // Return the list of operations
};
