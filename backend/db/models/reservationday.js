'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReservationDay = sequelize.define('ReservationDay', {
    reserverId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  ReservationDay.associate = function(models) {
    ReservationDay.belongsTo(models.User, {foreignKey: 'reserverId'});
    ReservationDay.belongsTo(models.Venue, {foreignKey: 'venueId'});
    // associations can be defined here
  };
  return ReservationDay;
};
