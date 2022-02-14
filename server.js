const express = require("express");
const app = express();
const bodyParse = require("body-parser");

app.use(bodyParse.urlencoded({ extended: true }));
app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", (req, res) => {
  const weight = parseFloat(req.body.w);
  const height = parseFloat(req.body.h);
  const r = weight / Math.pow(height, 2);
  res.send("Your BMI is " + r);
});
app.listen(3000, () => console.log("Hi am listening"));
