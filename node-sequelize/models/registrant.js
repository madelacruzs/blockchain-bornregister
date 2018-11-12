'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registrant = sequelize.define('Registrant', {
    idregistrant: 
    { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    secondlastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    bcaddress: DataTypes.STRING,
    fingerprint: DataTypes.STRING
  }, 
  {
    timestamps: false
  });
  Registrant.associate = function(models) {
    // associations can be defined here
  };
  return Registrant;
};