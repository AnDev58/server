const users = []

exports.stack = {
    new: (el) => {
        if(this.stack.id(el) === -1) users.push(el)
    },
    id: (el) => users.indexOf(el),
    remove: function(id) {
        if(id === -1 || users.length >= id) return false
        users.splice(id)
    },
    get: () => users
}