import Sequelize from 'sequelize';

const sequelize = new Sequelize(config.database, config.username, config.password, config);

var models  = {
  user: sequelize.import('./user'),
};


Object.keys(db).forEach(function(modelName) {
  if ("associate" in models[modelName]) {
    models[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default models;
