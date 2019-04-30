const jwt = require('jsonwebtoken')

module.exports = {
    verify(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            return decoded;
        }
        catch {
            throw new Error('error jwt')
        }
    },
    sign(input) {
        const token = jwt.sign(input, process.env.JWT_SECRET)

        return token;
    }
}