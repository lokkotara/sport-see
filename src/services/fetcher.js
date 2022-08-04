/**
 * @typedef {import ("../interfaces/interface").specsToFetch} specsToFetch
 */

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

let server ="";

/**
 * Custom method to fetch data from the server
 * @async
 * @param {specsToFetch} specs
 * @returns  {Promise.<Object>} 
 */
const fetcher = async ({url, method}) => {
  try {
    const res = await fetch(server+url, { headers, method});
    return await res.json();
  }
  catch (err){
    console.error("error:",err);
    throw err;
  }
};

/**
 * Define the server url
 * @param {string} url
 */
const setServerBaseUrl = url => {
  server = url;
};

/**
 * Custom fetch method with the GET method
 * @async
 * @param {string} url
 * @returns  {Promise.<Object>} 
 */
const fetcherGet = async url => {
  return await fetcher({url, method: "GET" });
};

export {
  fetcherGet,
  setServerBaseUrl
};
