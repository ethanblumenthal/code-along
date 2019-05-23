const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    }
  })

  User.associate = models => {
    User.hasMany(models.Stream);
  }

  return User
}

module.exports = user