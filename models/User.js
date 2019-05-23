module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    googleId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  })

  User.associate = models => {
    User.hasMany(models.Stream);
  }

  return User
}