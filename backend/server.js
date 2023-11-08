const app = require("./app")
const connectDatabase = require("./config/database")
const dotenv = require("dotenv")




dotenv.config({ path: "backend/config/config.env" })

connectDatabase()

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`)
})


// Unhandled Promise Rejection
process.on("unhandledRejection", () => {

  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
