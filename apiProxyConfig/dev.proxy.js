let mockFetch = require("../mocker/index");

module.exports = {
  port: 8082,
  host: "0.0.0.0",
  headers: {
    "X-foo": "112233"
  },
  inline: true,
  overlay: true,
  stats: "errors-only",
  before: app => {
    mockFetch(app);
  }
};
