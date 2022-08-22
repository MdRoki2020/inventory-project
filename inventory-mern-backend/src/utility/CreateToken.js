const jwt=require("jsonwebtoken");

//create token..
const CreateToken=async (data) => {
    let payload={exp:Math.floor(Date.now()/1000)+(24*60*60), data:data}
    return await jwt.sign(payload,'SecretKey123456789');
}

module.exports=CreateToken;