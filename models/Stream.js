module.exports = (sequelize, DataTypes) => {
  const Stream = sequelize.define('stream', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Stream.associate = models => {
    Stream.belongsTo(models.User)
  }

  return Stream
}