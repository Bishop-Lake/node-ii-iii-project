const db = require('../data/db-config')

module.exports = {
    find,
    findById
}

function find() {
    return db('schemes')
        .then(schemes => {
            return schemes
        })
}

function findById(id) {
    return db('schemes')
        .where({id : id})
        .then(scheme => {
            if (!id || scheme.length == 0) {
                return null
            } else {
                return scheme
            }
        })
}