'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desctiption: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    maxGuests: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dailyCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // bookingImgUrl: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  }, {});
  Venue.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'ReservationDay',
      otherKey: 'reserverId',
      foreignKey: 'venueId'
    }
    Venue.hasMany(models.Review, {foreignKey: 'venueId'});
    Venue.belongsToMany(models.User, columnMapping);
  };
  return Venue;
};
