export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    }
    password: type: DataTypes.STRING,
  });

  User.associate = (models) => {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    User.belongsToMany(models.Team, {
      through: 'member',
      forgeinKey: 'userId'
    });
  }

  return User;
};
