// dateUtils.js

// Utility function to format a timestamp into a date and time string
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds and create Date object
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`; // Return formatted date and time as a string
};
