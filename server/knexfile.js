// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql', // remember to change value to 'postgresql'
    connection: {
      host: '127.0.0.1',
      password: 'docker',
      user: 'postgres', //default postgres user
      port: 5432, // use 5432 when using normal postgres at port 5432:5432
			database: 'postgres' // expected database name to be created
    }
  },

  // test: {
  //   client: 'postgresql', // remember to change value to 'postgresql'
  //   connection: {
  //     host: '127.0.0.1',
  //     password: 'docker',
  //     user: 'postgres', //default postgres user
  //     port: 5432,
	// 		database: 'postgres' // expected database name to be created
  //   }
  // },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
