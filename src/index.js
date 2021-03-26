
// ========================real time Weather API =============================//

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//   ----->?q={city name}&appid={API key}-------->after question mark called query string,exp-->city name and appid

// MY API Key IS ------>   7a56b875352a452cf153f6d39fb0bce3  ///// manish---->89bbf6c1b0682176c05edc2bc8105e36
// EXAMPLE -->city name is patna

//   REAL TIME API url ++++++>>>>>>  api.openweathermap.org/data/2.5/weather?q=patna&appid=89bbf6c1b0682176c05edc2bc8105e36
// +++++++++++++++++++++++++++++++++ MY FIRST PROJECT ON NODE AND EXPRESS +++++++++++++++++++++++++++++++++++++++++++++++++

// ===== Only in project not use global=================

// 1. first install package.json file  {npm init}                     ---> because project dependent on express and many more
// 2. install express
// After That start the project--->with required many more MODULES



const express = require("express");
const app = express();
const port = 8000;   //this is local port but when you host than you can create environment----->process.env.PORT || 8000
const path = require("path");
const hbs = require("hbs");



staticPath = path.join(__dirname, "../public");               //Public path
templatePath = path.join(__dirname, "../template/views"); 
partialPath = path.join(__dirname, "../template/partial")


app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/about", (req, res) => {
    res.render("about"); 
});



app.get("/weather", (req, res) => {
    res.render("weather");
});


app.get("/contact", (req, res) => {
    res.render("contact");
});


app.get("*", (req, res) => {
    res.render("page404");
});


app.listen(port, () => {
    console.log("success");
});