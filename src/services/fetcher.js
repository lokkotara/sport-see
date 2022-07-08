const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};

let server ="";

/**
 * [async description]
 * @param   {Object} specs
 * @param   {String}  specs.url       [url description]
 * @param   {("GET" | "POST" | "DELETE" | "PATCH" | "PUT")}  specs.method    [method description]
 * @param   {Object}  [specs.options]      [data description]
 * @param   {Object}  [specs.data]      [data description]
 *
 * @return  {Promise.<Object>}            [return description]
 */
async function fetcher({url, method, data, options}) {
  try {
    const res = await fetch(server+url, { headers, method});
    return await res.json();
  }
  catch (err){
    console.error("error:",err);
    throw err;
  }
}

function setServerBaseUrl(url){
  server = url;
}

// function setBearerToken(token){
//   headers.Authorization = `Bearer ${token}`;
// }

function fetcherPost(url, data){
  return fetcher({url, method: "POST",data });
}

async function fetcherGet(url){
  return await fetcher({url, method: "GET" });
}

export {
  fetcherPost,
  fetcherGet,
  setServerBaseUrl
};
