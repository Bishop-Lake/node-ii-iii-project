const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add
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

function findSteps(id) {
    return db('schemes')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .where({'schemes.id': id})
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('steps.step_number', 'asc')
        .then(steps => {
            if (!id || steps.length == 0) {
                return null
            } else {
                return steps
            }
        })
}

function add(scheme) {
    if (!scheme) {
        return null
    } else {
    return db('schemes')
        .insert(scheme, ['id', 'scheme_name'])
    }
}