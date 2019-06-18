module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    port: 8082,
    host: "0.0.0.0",
    headers: {
      "X-foo": "112233"
    },
    inline: true,
    overlay: true,
    stats: "errors-only",
    before: app => {
      app.get("/api/*", (req, res) => {
        console.log(req.route);
        res.json({
          name: "mock"
        });
      });
    }
  }
};
