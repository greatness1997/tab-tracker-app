const Promise = require("bluebird");
const bcrypt = require("bcrypt");

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed("password")) {
    return;
  }

  return bcrypt
    .genSalt(SALT_FACTOR)
    .then(salt => bcrypt.hash(user.password, salt, null))
    .then(hash => {
      user.setDataValue("password", hash);
    });
}

module.exports = (sequelize, DataType) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataType.STRING,
        unique: true
      },
      password: DataType.STRING
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    }
  );

  User.prototype.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
