const bcrypt = require('bcryptjs')

module.exports = {
    compare(input, hashed) {
        const loggedIn = bcrypt.compareSync(input, hashed)
        return loggedIn;
    },
    hash(input) {
        const hashed = bcrypt.hashSync(input, 10)
        return hashed;
    }
}