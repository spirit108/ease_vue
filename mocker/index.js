let getObj = require("./get");

let pathObj = {
  "/api/user": getObj.user
};
function mockFetch(app) {
  app.get("/api/*", (req, res) => {
    console.log(req._parsedUrl);
    console.log(req._parsedUrl.pathname);
    res.json(pathObj[req._parsedUrl.pathname]);
  });
}

module.exports = mockFetch;
