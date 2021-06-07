const rootDir = process.env.NODE_ENV === 'development' ? './dist' : './dist';

module.exports = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'postgres',
  password: 'mesavip',
  database: 'challenge-api',
  migrations: [`${rootDir}/database/migrations/*`],
  entities: [`${rootDir}/modules/**/entities/*`],
  cli: {
    migrationsDir: `${rootDir}/database/migrations`,
  },
};
