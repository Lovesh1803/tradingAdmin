/**
 * @author Lovesh Singh
 * @since 09-08-2022..
 * @description network request manager.
 */
import { getAuthLocalStorage } from "../storage/getLocalStorage";

/**
 * @author Lovesh Singh
 * @since 09-08-2022.
 * @param url API request url.
 * @param method request method.
 * @param body request body.
 * @param requestHeaders request headers.
 * @returns {Promise<unknown>} promise.
 */
export const callAPI = (url, method, body, requestHeaders = {}) =>
  new Promise((resolve, reject) => {
    getAuthLocalStorage().then((res) => {
      let loginHeader = res.loginHeader;
      if (loginHeader && loginHeader.length > 0) {
        requestHeaders["Authorization"] = `Bearer ${loginHeader}`;
      }
      requestHeaders["Content-Type"] = "application/json";

      console.log("NetworkConnection.js url -->", url);
      console.log("NetworkConnection.js method -->", method);
      console.log("NetworkConnection.js requestHeaders -->", requestHeaders);
      console.log("NetworkConnection.js body -->", body);

      return fetchWithTimeout(url, {
        method: method,
        headers: requestHeaders,
        body: JSON.stringify(body),
        timeout: 35000, // 35 seconds.
      })
        .then((response) => {
          console.log("NetworkConnection.js Raw Response -->", response);
          let statusCode = +response.status;
          if (statusCode < 300) {
            // If success than execute other response.
            console.log("response success");
            resolve(response.json());
          } else {
            console.log("reject ....................");
            reject(response);
          }
        })
        .catch((error) => {
          // To handle error.

          let title = "Something went wrong";
          let description = "Unknown Error.";

          if (error.name === "AbortError") {
            // if request timeout.
            title = "Request timeout";
            description = "Server out of reachable.";
            error.message = "Internet problem";
          }

          reject({
            ...error,
            status: NetworkStatus.REQUEST_TIMEOUT,
            statusText: title,
          });
        });
    });
  });

/**
 * @author Lovesh Singh
 * @since 09-08-2022.
 * @param resource resource url
 * @param options request options.
 * @returns {Promise<*>} promise.
 * @description fetch request with Request options.
 * <p> default timeout will be set for 8 seconds.</p>
 */
export const fetchWithTimeout = async (resource, options) => {
  console.log("fetch With Timeout Called........................");
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
};

export const NetworkStatus = {
  REQUEST_TIMEOUT: 408,
};
