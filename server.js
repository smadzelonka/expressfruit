/* ===== External Modules ===== */
// not our code
const express = require("express");

/* ===== Internal Modules ===== */
// all code that is ours

/* ===== Instance Modules ===== */
const app = express();

/* ===== system variables ===== */
const PORT = 4000;

/* ===== Routes ===== */
/* 
    Request Methods
        GET - get data
        POST - create data -> body data
        PUT - update data -> body data and target
        PATCH - update data of a specfic value -> body data and target
        DELETE - delete / destory -> target 
*/

/* ===== Home route ===== */
// on a get request to "/" run a function
// app.get("url", callback function(request{}, response{}){do something})
app.get("/", function(req,res){
    res.send("Hello world")
})

/* ====== sever bind ====== */
// binds the application to the port via app.listen
// app.listen(number, function to do after bind)
app.listen(PORT, function(){
    console.log(`sever is live at http://localhost:${PORT}/`);
})

console.log("hello");