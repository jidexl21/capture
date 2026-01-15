const fs = require('fs');
const log = require("./config.json");

const Log = (data) =>{
   // console.log(data)
    fs.appendFileSync(log.logfile, data);
}
const View = ()=>{
    return fs.readFileSync(log.logfile, {encoding: "utf-8"});
}
module.exports = {Log, View}