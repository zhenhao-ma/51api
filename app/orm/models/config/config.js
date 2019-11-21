let databaseConfig = require('../../../../config/config').mySql;
module.exports = {
    "development":databaseConfig.development,
    'test':databaseConfig.test,
    'production':databaseConfig.production
};
