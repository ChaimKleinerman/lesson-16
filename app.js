const myFunctions = require("./functions.js");

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
//get all users
app.get("/", (req, res) => {
    myFunctions.read().then((data) => {
        const jsonData = JSON.stringify(data);
        res.send(jsonData);
    });
});
//get user by id
app.get("/:id", (req, res) => {
    myFunctions.read().then((data) => {
    const myArray = data.split('\n')
    const jsonData = JSON.stringify(myArray[req.params.id -1]);
        res.send(jsonData);
    });
});

//create new user
app.post("/",(req,res)=>{
    myFunctions.write(req.body)
    res.send('mission completed')
})

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});
