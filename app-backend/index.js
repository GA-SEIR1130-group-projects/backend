const express = require("express") 
const app = express()  
const router = require("./controller/users");

app.use(express.json()); 
app.use(express.urlencoded({ entended: true }));  

app.set("port", 2000); 


// Routers
app.use("/", router)  

app.get("/", (req, res) => {     
    res.send("Homepage is setup") 
})  

// Run Port
app.listen(app.get("port"), () => {
    console.log(`🍎 is running on port ➡️ http://localhost:${app.get("port")} 🌟`); 
}) 