// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/G95_warmup_database'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
}
