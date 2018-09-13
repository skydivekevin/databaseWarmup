

const dbConnection = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(dbConnection)

module.exports = {
  getAll() {
    return knex.select().from('students')
  },
  create(putStuff) {
    return database('students')
      .insert(putStuff).returning('*')
  },
  delete(id) {
    return database('students')
      .where('id', id)
      .delete()
  }
}