const express = require("express");

const app = express();

const myMiddleware1 = (req, res, next) => {
    console.log(
        `${new Date(Date.now()).toLocaleString()} -- ${req.method} -- ${
            req.originalUrl
        } -- ${req.protocol} -- ${req.ip}`
    );
    // next
    next();
};
const myMiddleware2 = (req, res, next) => {
    console.log("middleware 2");
    // next
    next();
};
app.use(myMiddleware1);
// app.use(myMiddleware2);
app.get("/about", (req, res) => {
    res.send({ message: "hello world" });
});

app.listen(3000, () => {
    console.log(`App listning on port 3000`);
});
