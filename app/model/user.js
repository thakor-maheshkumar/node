const mongoose=require('mongoose');
var schema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
	},
	phone:{
		type:String,
		required:true,
	}
})

var user=new mongoose.model('User',schema);
module.exports=user;