import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB() //Since connectDB is async, it returns a Promise.
  // You chain .then() and .catch() to handle the result.
  .then(() => {
    app.on("error", (err) => {
      //attaches an event listener for server-level errors (e.g., port already in use).
      console.log(`connection failed: ${err}`);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`server is listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`connection failed: ${error}`);
  });
