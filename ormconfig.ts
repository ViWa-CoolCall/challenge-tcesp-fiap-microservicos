const rootDir = process.env.NODE_ENV === 'development' ? './dist' : './dist';

module.exports = {
  type: 'postgres',
  port: 5432,
  extra: {
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  },
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [`${rootDir}/database/migrations/*`],
  entities: [`${rootDir}/modules/**/entities/*`],
  cli: {
    migrationsDir: `${rootDir}/database/migrations`,
  },
};
