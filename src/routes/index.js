const newsRouter = require("./news");
const courseRouter = require("./course");
const siteRouter = require("./site");
const meRouter = require("./me");

function route(app) {
  app.use("/courses", courseRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
  app.use("/me", meRouter);
}

module.exports = route;
