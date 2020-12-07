
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

// ==== fruit routes aka RESTFUL ROUTING ====
// fake database
const fruits = ["apple","banana","orange"];

// if a url has a questions mark what ever follows is a query
//  "/fruits?name=Sean"
// request.query = {name: "Sean"}

// fruits index - show all fruits
app.get("/fruits", function (req, res){

    if(req.query.filter){
        const filtered = fruits.filter((fruits =>{
            return fruits.includes(req.query.filter)
        }))
        return res.send(filtered)
    }

    res.send(fruits)
})
/* ====== Params -> a variable built into our route ====== */

// fruit show - show a specific fruit
app.get("/fruits/0", function (req, res){
    res.send(fruits[0])
})

/* ===== order matters ===== */
// cool fruits route doesnt work because comes after the params app.get
app.get("/fruits/cool", function (req, res){
    res.send("Fruits are cool")
})
// params
app.get("/fruits/:index", function (req, res){
    const index = req.params.index
    res.send(`This is your fruit ${fruits[index]}`)
})
// fruits with name
app.get("/fruits/:index/:name", function (req, res){
    const index = req.params.index
    res.send(`${req.params.name} is looking for ${fruits[index]}`)
})



/* ====== sever bind ====== */
// binds the application to the port via app.listen
// app.listen(number, function to do after bind)
app.listen(PORT, function(){
    console.log(`sever is live at http://localhost:${PORT}/`);
})

console.log("hello");