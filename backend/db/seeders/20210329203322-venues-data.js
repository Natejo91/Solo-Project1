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
          bookingImgUrl: 'https://thumbnails.production.thenounproject.com/1SeMMEABqFwVm3lglZb3fjn_BUk=/fit-in/1000x1000/photos.production.thenounproject.com/photos/9329F5F0-D4C6-4F8B-A380-129791475A2D.jpg',
          city: 'Michigan City',
          state: 'Michigan',
        },
        {
          title: 'Loft Venue',
          description: 'Outdoor space that can be used to hold concerts in winter or summer as it is well insulated and heated.',
          maxGuests: '40',
          dailyCost: '22.00',
          address: '10 W Hill Ave',
          bookingImgUrl: 'https://thumbnails.production.thenounproject.com/XYv4ctW2u8RNSz3VbXur91WCUOQ=/fit-in/1000x1000/photos.production.thenounproject.com/photos/018145C5-9B1F-4CE2-A4CC-8F66041E70AD.jpg',
          city: 'East Chicago',
          state: 'Indiana',
        },
        {
          title: 'Studio apartment',
          description: 'Super spacious studio apartment for intimate chamber concerts. Have space for bigger groups too but performers will need to bring more stands. Please fell free to ask any questions about the place.',
          maxGuests: '20',
          dailyCost: '75.00',
          address: '1452 N Ashford Ave',
          bookingImgUrl: 'https://thumbnails.production.thenounproject.com/dvyNo2CYZSfn0np2OMDmchr5uvI=/fit-in/1000x1000/photos.production.thenounproject.com/photos/EA884F5A-7453-4DAA-837D-CA4F666A5D20.jpg',
          city: 'Oberlin',
          state: 'Ohio',
        },
        {
          title: 'East Cleveland basement',
          description: 'Gritty but spacious spot, perfect for house shows. Two apms in-house. Drumset and Yamaha keyboard available upon request. Street parking and garage access on East, overflow seating and smoking area in backyard. BYOB allowed.',
          maxGuests: '55',
          dailyCost: '40.00',
          address: '11021 East Boulevard',
          bookingImgUrl: 'https://thumbnails.production.thenounproject.com/1vn4YisrK1Cl8zrDr5KCF9R2GFs=/fit-in/1000x1000/photos.production.thenounproject.com/photos/795B767A-D831-4256-9995-06A2981F5D54.jpg',
          city: 'Cleveland',
          state: 'Ohio',
        },
        {
          title: 'Elegant home',
          description: 'Living-room area with recently tuned piano available for concerts of classical and acoustic music. We live in an elderly neighborhood so matinee performances would be best.',
          maxGuests: '35',
          dailyCost: '25.00',
          address: '1655 Pelham Road',
          bookingImgUrl: 'https://thumbnails.production.thenounproject.com/nDlj7JqvBGL_O_jBFnk9Fuch2CA=/fit-in/1000x1000/photos.production.thenounproject.com/photos/8E345ED2-ACC1-4D94-9280-0057FAEB16C3.jpg',
          city: 'Greenville',
          state: 'South Carolina',
        },
        {
          title: 'Outdoor amphitheater',
          description: 'Amphitheater space and park by Elk Park Christian Church open for family-friendly concerts. Amps, stands, microphones, keyboard, and drumset available with two weeks notice. Alcohol not permitted.',
          maxGuests: '350',
          dailyCost: '115.00',
          address: '220 Old Mill Rd',
          bookingImgUrl: 'https://thumbnails.production.thenounproject.com/MVkvpKanp-xrlrzv2_FxIJOmCFY=/fit-in/1000x1000/photos.production.thenounproject.com/photos/80E6504B-EF60-4361-96B0-2BC5219E4868.jpg',
          city: 'Elk Park',
          state: 'North Carolina',
        },
        {
          title: 'San Francisco Dungeon',
          description: 'Unorthodox space for experimental noise of any kind. 18+ at all events. Alcohol sold upstairs with valid ID. Earplugs available at door.',
          maxGuests: '85',
          dailyCost: '70.00',
          address: '145 Jefferson St',
          bookingImgUrl: 'https://thumbnails.production.thenounproject.com/T9hWinnoDK1QTtNdJJDbtBIVVsg=/fit-in/1000x1000/photos.production.thenounproject.com/photos/C645A418-7A52-4218-8289-0C1B465507A5.jpg',
          city: 'San Francisco',
          state: 'California',
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Venues', null, {});
  }
};
