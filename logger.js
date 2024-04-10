const fs = require('fs');
const log = require("./config.json");

const Log = (data) =>{
   // console.log(data)
    fs.appendFileSync(log.logfile, data);
}

module.exports = {Log}