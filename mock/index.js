let fs = require("fs");

function mockFetch(app) {
  app.get("/mock/api/*", (req, res) => {
    fs.readFile(`.${req._parsedUrl.pathname}.json`, (err, data) => {
      if (err) {
        res.status(404);
        res.send({ status: 404, err: err });
        return;
      }
      res.send(data);
    });
  });
}

module.exports = mockFetch;
