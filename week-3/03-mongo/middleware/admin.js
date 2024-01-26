const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    try{
        const admin = await Admin.findOne({username,password});
        if(admin){
            next();
        }else{
            res.status(403).json({ msg: "admin doesn't exist" });
        }

    }catch(error){
        res.status(500).send("Server error");
    }
}

module.exports = adminMiddleware;