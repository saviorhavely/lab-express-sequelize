const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = {
    hasCredentials: async (req, res, next) => {
        const adminHeader = req.headers.authorization;

        if(!adminHeader) {
            return res.status(400).json({
                error: true,
                message: "header não encontrado"
            });
        }

        const [, token ]= adminHeader.split(' ');
        //console.log("Token: " + token);
                
        if(!token) {
            return res.status(400).json({
                error: true,
                message: "token não encontrado"
            });
        }

        try{
           const decode = await promisify(jwt.verify)(token, process.env.JWT_ENCODE_KEY)
           req.userData = {
               id: decode.id,
               username: decode.username,
               email: decode.email
           }

           return next();
        }catch(err){
            return res.status(400).json({
                error: true,
                message: "tem algo errado, logar novamente"
            });
        }


    }
}