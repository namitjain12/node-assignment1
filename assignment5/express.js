const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

mongoose
  .connect("mongodb+srv://namit:namitj@cluster0.q2bmgal.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



//schema
const schema={
    name:String,
    email:String,
    id:Number 
}

const monmodel= mongoose.model("hello",schema);


app.post("/post",async(req,res)=>{
    console.log("hello there inside post function");

    const data =new monmodel({
        name: req.body.name,
        email:req.body.email,
        id:req.body.id
    });
    const val= await data.save();
    res.json(val);
})


app.listen(4000, () => {
    console.log("Server is running on port 3000");
  });