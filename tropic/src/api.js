const axios = require("axios");
async function getAllData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(response.data);
  return response.data;
}

module.exports = getAllData;
