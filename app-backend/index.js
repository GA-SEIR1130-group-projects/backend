const express = require("express") 
const app = express();
const cors = require("cors");
const router = require("./controllers/users.js");

app.use(express.json()); 
app.use(express.urlencoded({ entended: true })); 
app.use(cors());

app.set("port", process.env.PORT || 2000); 


// Routers
app.use("/api", router)  

app.get("/", (req, res) => {     
    res.send("Homepage is setup") 
})  

// Run Port

app.listen(app.get("port"), () => {
    console.log(`🍎 is running on port ➡️ http://localhost:${app.get("port")} 🌟`); 
}) 

