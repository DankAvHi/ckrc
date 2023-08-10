const Express = require("express")

const app = Express()

app.get("*",(_req,res)=>res.send("WORK"))

app.listen(80, ()=>console.log("Server started at http://localhost:80"))