const {Users} = require("../Database/Users");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    let { email } = req.body;
    let body = req.body;
    let alreadyRegistered = await Users.findOne({email: email});
    if(alreadyRegistered){
        return res.status(400).send({message: "This user is already registered"});
    }
    else {
        await Users.create(body);
        return res.status(200).send({
        message : "User registered"
    })
    }
}

const login = async (req, res) => {
    let {email, password} = req.body;

    let userExists = await Users.findOne({email});
    console.log(userExists)

    if(userExists){
        if(userExists.password == password){
            let encryptedString =jwt.sign({name:userExists.name,email:userExists.email},"y98eryid");
            return res.status(200).send({token : encryptedString});
        }
        else{
            return res.status(403).send({message: "Wrong Password"});
        }
    }
    else{
        return res.status(409).send({message: 'This email is not registered, Signup to continue'});
    }

}

module.exports = {
    register,
    login
}