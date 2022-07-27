const UserModel=require('../model/user');

exports.create=async(req,res)=>{
	if(!req.body.name && !req.body.email){
		res.status(400).send({
			message:"Content can not be empty"
		})
	}
	const user=new UserModel({
		name:req.body.name,
		email:req.body.email,
		phone:req.body.phone
	});
	await user.save().then(data=>{
		res.status(200).send({
			message:'User created successfully',
			user:data
		})
	}).catch(err=>{
		res.status(404).send({
			message:"Something has wrong please try again letter"
		})
	})
}

exports.findAll=async(req,res)=>{
	const user=await UserModel.find();
	if(!user){
		res.status(400).send({
			message:"Something wrong please try again letter"
		})
	}
	res.status(200).json(user);
}

exports.findOne=async(req,res)=>{
	const id=req.params.id;
	const user=await UserModel.findById(id);
	console.log(user);
	if(!user){
		res.status(400).send({
			message:"User not found"
		})
	}
	res.status(200).json(user);
}