// require("dotenv").config();

// const express = require("express");
// const app = express();
// const userRouter = require("./api/users/user.router");

// app.use(express.json());
// app.use("/api/users", userRouter);





// // app.get("/api", (req,res) => {

// //   res.json({
// //     success : 0,
// //     message : "This is the first API working fine 👍"
// //   });

// // });


// app.listen(process.env.APP_PORT, ()=> {
//     console.log("Sever up and running on PORT : ", process.env.APP_PORT)
// });



// App.js
require("dotenv").config();

const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on PORT: ", process.env.APP_PORT);
});

