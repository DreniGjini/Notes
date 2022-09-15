import { DataSource } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const ORM_CONFIG: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [`dist/src/db/migrations/*.js`],
};

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db',
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  synchronize: false,
  migrations: [`dist/src/db/migrations/*.js`],
});

export default dataSource;
