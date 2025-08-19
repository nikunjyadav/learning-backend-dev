import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express(); //instance of express

app.use(
  //used for building configuration or middlewares
  cors({
    //for handling cross origin requests
    origin: process.env.CORS_ORIGIN, //origin: Which domains are allowed to make requests to your server.
    credentials: true, //Allows cookies or authentication headers to be sent in cross-origin requests.
  })
);

app.use(
  express.json({
    //Parses incoming requests with JSON payloads and puts the result in req.body.
    limit: "16kb", //Rejects requests with JSON bodies larger than 16 kilobytes to protect against large-payload attacks.
  })
);

app.use(
  express.urlencoded({
    //Parses URL-encoded form data (application/x-www-form-urlencoded).
    extended: true, //Allows nested objects using the qs library.
    limit: "16kb",
  })
);

app.use(express.static("public")); //Serves static files (HTML, CSS, JS, images) directly from the "public" folder.
//If a file matches the request path, it’s sent immediately — no other middleware runs afterward for that request.

app.use(cookieParser()); //Parses cookies from the Cookie HTTP header and puts them in req.cookies.

// app.use() registers middleware for all HTTP methods and all paths (unless you specify a path as the first argument).

// Putting these at the top means every request will be:
//     1-Checked for CORS rules.
//     2-Parsed for JSON/form data.
//     3-Able to serve static assets from public/.
//     4-Parsed for cookies.

// 💡 Order matters here:
//     CORS first → sets headers before anything else.
//     Body parsers → so routes can read req.body.
//     Static serving → so public files are served quickly without extra processing.
//     Cookie parser → so authentication middleware can read cookies.

export { app };
