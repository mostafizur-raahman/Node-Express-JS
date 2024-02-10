const express = require("express");

const app = express();
const admin = express();
const PORT = 3000;

app.use("/admin", admin);

admin.get("/dashboard", (req, res) => {
    const _doc = {
        name: "Mostafizur Rahman",
        mentor: "Mostafiz",
        mountpth: admin.mountpath,
    };

    return res.status(200).send({
        message: "Admin route",
        _doc,
    });
});

app.param("id", (req, res, next, id) => {
    //data
    const user = {
        name: "Mostafizur Rahman",
        id: id,
    };

    req.user = user;
    next();
});

app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
    return res.send({
        message: "App route",
    });
});

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
