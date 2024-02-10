const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = 3000;

const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
    // console.log(req.baseUrl);
    console.log(req.path);
    res.status(200).send("This is admin Route.");
});

app.use("/admin", adminRoute);
app.use(cookieParser());

app.get("/user/:id", (req, res) => {
    // console.log("base url ", req.baseUrl, " ", req.originalUrl);
    console.log(req.cookies);
    return res.send({
        message: "Hello World!",
    });
});

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
