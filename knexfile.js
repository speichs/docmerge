'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/docmerge'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/docmerge'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
