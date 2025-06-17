const {User} = require("../models/user");


async function handleAllUsers(req, res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
} 

async function handleGetUserById(req, res){
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404).json({ "msg" : "user not found."})
    }else{
    return res.json(user);}
}

async function handleUpdateUserById(req, res){
        await User.findByIdAndUpdate(req.params.id, {
            firstName : req.body.first_name,
            lastName: req.body.last_name,
            email : req.body.email,
            gender: req.body.gender,
            jobTitle: req.body.job_title
        })
        return res.json({"msg" : "Success"});
}

async function handleDeleteUserById(req, res) {
        await User.findByIdAndDelete(req.params.id);
        return res.json({"msg" : "Success"});
}

async function handleCreateUser(req, res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name ||!body.email ||!body.gender ||!body.job_title ){
        res.status(400).json({ "msg" : "pls give all the req. details"})
    }else{
    const result = await User.create({
        firstName : body.first_name,
        lastName: body.last_name,
        email : body.email,
        gender: body.gender,
        jobTitle: body.job_title

    })
    return res.status(201).json({ "msg" : "Success"});
    }
}

module.exports = {
    handleAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
}