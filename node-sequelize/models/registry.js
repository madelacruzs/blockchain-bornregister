'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registry = sequelize.define('Registry', {
    idregistry: 
    { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    idregistrant: DataTypes.INTEGER,
    idsecondregistrant:DataTypes.INTEGER,
    idhospital: DataTypes.INTEGER,
    iddoctor:DataTypes.INTEGER,
    hashfingerprint: DataTypes.STRING,
    datetime: DataTypes.DATE,
    bcaddress: DataTypes.STRING,
    fingerprint: DataTypes.STRING,
    sex: DataTypes.STRING,
    address: DataTypes.STRING,
    nationality: DataTypes.STRING,
    registrantfingerprint: DataTypes.STRING,
    secondregisterfingerprint: DataTypes.STRING,
    tx_hash:req.body.tx_hash
  }, 
  {
    timestamps: false
  });
  Registry.associate = function(models) {
    // associations can be defined here
  };
  return Registry;
};