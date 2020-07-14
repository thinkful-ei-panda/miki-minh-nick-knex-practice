const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: 'postgresql://dunder_mifflin:password-here@localhost/knex-practice',
});

