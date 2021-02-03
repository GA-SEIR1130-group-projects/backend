const User = require("../models/user-models.js")

const seedData = require("./user.json");

User.deleteMany({})
.then(() => {
    return User.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(() => process.exit());



