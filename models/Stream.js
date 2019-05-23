const stream = (sequelize, DataTypes) => {
  const Stream = sequelize.define('stream', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })

  Stream.associate = models => {
    Stream.belongsTo(models.User)
  }

  return Stream
}

module.exports = stream