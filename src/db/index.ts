import {DataSource} from 'typeorm';
import {User} from './entities/user.entity';

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "mvp",
  synchronize: true,
  logging: true,
  entities: [
    User,
  ],
  subscribers: [],
  migrations: [],
})
