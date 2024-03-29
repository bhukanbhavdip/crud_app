const User = require("../database/db")

const addUser = async (req,res)=>{
    const user = req.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}
const getUsers = async (req,res)=>{
    try{
        const users = await User.find({})
        res.status(200).json(users);
    }catch(error){
        res.status(401).json({message: error.message});
    }
}
const getUser = async (req,res)=>{
    try{
        const user = await User.find({_id: req.params.id})
        res.status(200).json(user);
    }catch(error){
        res.status(401).json({message: error.message});
    }
}
const editUser = async (req,res)=>{
    let user = req.body;
    let editUser = new User(user);
    
    try{
        await User.updateOne({_id: req.params.id},editUser)
        res.status(201).json(editUser);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}

const deleteUser = async (req,res)=>{
    try{
        await User.deleteOne({_id:req.params.id});  
        res.status(201).json({message:"User Deleted Sucessfully"})
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    editUser,
    deleteUser
}