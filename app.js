const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;

// imports

const postsRouter = require("./Routers/posts");
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");

// middlewares

app.use(express.static("public"));
app.use(express.json());

// routers

app.use("/posts", postsRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`test app sulla porta ${appUrl}`);
});
