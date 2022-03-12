const { createHash } = require("crypto")

module.exports = class User {
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = createHash("sha256").update(password).digest('hex').toString()
    }
}