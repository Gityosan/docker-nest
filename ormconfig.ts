import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { TestObject } from './src/test-object/test-object';

const options: MysqlConnectionOptions = {
  type: 'mysql',
  host: '172.27.0.1',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'develop',
  entities: [TestObject],
  migrations: ['db/migrations/*.ts'],
  synchronize: true,
};

module.exports = options;
