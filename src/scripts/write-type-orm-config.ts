import { databaseConfig } from '../config/database.config.service';
import fs = require('fs');

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(databaseConfig.getTypeOrmConfig(), null, 2),
);
