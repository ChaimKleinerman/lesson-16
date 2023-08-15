const fs = require("fs");

function read() {
    return new Promise((resolve,reject)=>{
        fs.readFile("data.txt", "utf-8", (err, data) => {
            if (err) reject(new Error("this is error"));
            resolve(data);
        });
    })
}


function write(CurrentData){
    fs.appendFile('data.txt',CurrentData,(err)=>{
        if(err) throw err
        console.log("The file has been saved!");

    })
}
module.exports ={
    read,
    write
}
