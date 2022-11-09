require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

const express = require("express");
const app = express();

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /[model] to [route name].js
app.use("/Author", require("./routes/bookstoreRoutes"));
app.use("/Books", require("./routes/bookstoreRoutes"));
app.use("/CreditCard", require("./routes/userRoutes"));
app.use("/User", require("./routes/userRoutes"));

// Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

// Listen on PC port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));