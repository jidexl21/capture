const fs = require('fs');
const log = require("./config.json");
var logFile = process.env.WEBHOOK_LOG || log.logFile; 
const Log = (data) =>{
   // console.log(data)
   console.log(`attempting to wrrite to file ${logFile}`)
    fs.appendFileSync(logFile, data);
}
const View = ()=>{
    return fs.readFileSync(log.logfile, {encoding: "utf-8"});
}
module.exports = {Log, View}
