const express = require("express")
const colors =require ("colors");
const cors = require("cors");
const morgan =require ('morgan');
const dotenv =require('dotenv')


const app =express();

app.use(cors());
app.use(express.json())
app.use(morgan('dev'));

app.get("/",(req,res)=>{
    return res.status(200).send("<h1>Welcome To The Food Server App</h1>");
}); 

const PORT =process.env.PORT || 8080;

app.listen(PORT,()=> {
    console.log('Server is running on ${PORT}'.white.bgMagenta);
});