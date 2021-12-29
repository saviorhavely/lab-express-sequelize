const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = {
    isAdmin: (req, res, next) => {
        const adminHeader = req.headers.authorization;

        if(!adminHeader) {
            return res.status(400).json({
                erro: true,
                message: "header not found"
            });
        }

        const [, token ]= adminHeader.split(' ');
        //console.log("Token: " + token);
        
        if(!token) {
            return res.status(400).json({
                erro: true,
                message: "token not found"
            });
        }

    }
}