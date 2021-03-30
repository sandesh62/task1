const URL = "https://jsonplaceholder.typicode.com/todos";
// using default fetch method provided by React
export const fetchData = async () => {
  let response = null;
  await fetch(URL)
    .then((res) => res.json())
    .then((result) => {
      result = result.slice(0, 10);
      response = { result, error: false };
      // result is reduced to first 10 elements
      // an object is created and passed back to parent page
    })
    .catch((error) => {
      response = { result: null, error: true };
    });
    return response;
};
