/*
 *  ApiUtils: contains helper functions to check response status 
 *  and buildQueryString to replace space character & forcasting lowercase string 
 *  for Calling Rest API
 */

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
export function buildQueryString(query) {
  return query.replaceAll(" ", "+").toLowerCase()
}
