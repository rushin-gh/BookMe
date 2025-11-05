let port = 3000;

const express = require("express");
const app = express();
app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR : ${err.message}`);
  } else {
    console.log(`Server is successfully running and listening on ${port}`);
  }
});

app.get("/ping", (req, res) => {
  res.status(200).send("<h1>Server is up!</h1>");
});
