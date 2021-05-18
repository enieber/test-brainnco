const routers = (app) => {
  app.get("/", async (req, res) => {
    res.json({ message: "hello woldr" });
  });
};

module.exports = routers;
