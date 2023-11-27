const express = require('express');

const app = express();

const rutaMain = require("./routers/main");

const path = require("path")

app.use(express.static(path.join(__dirname,"public")))


app.use("/",rutaMain);

app.use("/about",rutaMain);


app.listen(3000,()=>{
    console.log('Servidor corriendo');
});

