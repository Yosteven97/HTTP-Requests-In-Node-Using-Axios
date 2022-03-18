const axios = require('axios')

axios
  .get("http://worldtimeapi.org/api/timezone/Asia/Jakarta")
  .then((res) => {
    console.log(`Status Code: ${res.status}`);
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });