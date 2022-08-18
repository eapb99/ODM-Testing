const nodbConfig = require("../config/nodb.config.js");
const mongoose = require('mongoose');

mongoose.Promise= global.Promise;

const db_path = nodbConfig.dialect + '://' + nodbConfig.HOST + '/' + nodbConfig.noDB;

const db = {}
db.mongoose = mongoose;
db.url = db_path;
db.tutorials = require("./botsModel")(mongoose)
db.tutorials = require("./interactionModel")(mongoose)

module.exports = db;

/*mongoose.connect(db_path, config)
    .then(() => console.log('DB connnection successful!'))
    .catch(err => {
        console.error.bind(console, 'MongoDB connection error:')
    });*/