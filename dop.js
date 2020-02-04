const http = require("http");
const express = require("express");
const fs = require("fs");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://s4mm.glitch.me/  `);
}, 280000);
const exec = require("child_process").exec;
const childPorcess = exec(
  'java -Dnogui=true -jar ./bot.jar "Jar is invoked by Node js"'
);

//aحقوق ويش يو وير هير اند دورا
//WI$H U WERE HEREA & DORA
console.log("IS Working");
