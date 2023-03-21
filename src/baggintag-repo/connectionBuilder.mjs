import config from '../../config.json' assert { type: 'json' };
import { Sequelize } from 'sequelize';

export default function getDatabase() {
    const sequelize = new Sequelize(config.collections.database, config.collections.user, config.collections.password, {
        host: config.collections.host,
        port: config.collections.port,
        logging: false,
        dialect: 'mariadb',
        dialectOptions: {
            connectTimeout: 10000
          }
    });
    return sequelize;
}