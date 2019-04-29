const jwt = require('jsonwebtoken')

module.exports = {
    verify(token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded;
    },
    sign(input) {
        try {
            const token = jwt.sign(input, process.env.JWT_SECRET)

            return token;
        }
        catch {
            res.json('error jwt')
        }
        
        
    }
}