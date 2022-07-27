const express=require('express');
const bodyParser=require('body-parser');

const mongoose=require('mongoose');
const dbConfig=require('./config/database.config.js')
mongoose.connect(dbConfig.url,{
	useNewUrlParser:true

}).then(()=>{
	console.log("Database connected successfully");
}).catch(err=>{
	console.log('could not connect to the database',err);
	process.exit;
})
const app=express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{
	res.json({"message":"Hello crud node express"})
})

app.listen(3000,()=>{
	console.log("Server is listening on port 3000")
})
const UserRoute=require('./app/routes/User');
app.use('/user',UserRoute);
mongoose.Promise=global.Promise;