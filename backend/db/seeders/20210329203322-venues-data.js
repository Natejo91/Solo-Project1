'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [
        {
          title: 'TownHome',
          description: 'This quaint town home is a perfect place to hold a concert for a string quartet or for solo piano. We have an upright piano in the house that is available for use and is always tuned properly.',
          maxGuests: '50',
          dailyCost: '80.00',
          address: '1200 W Hillford Ave',
          city: 'Michigan City',
          state: 'Michigan',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Venues', null, {});
  }
};
