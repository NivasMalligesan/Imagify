import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const {token} = req.headers;
  

    if (!token) {
        return res.status(401).json({ success: false, message: "Token not found" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }else{
         return res.json({ success: false, message: "not Authorized Login again" });   
        }
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default userAuth;