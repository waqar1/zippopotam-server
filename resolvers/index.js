const axios = require('axios');

const BASE_API_URL = 'http://api.zippopotam.us';

const resolvers = {
  Query: {
    zipCodeInfo: async (parent, args) => {
      const zippopotamResponse = await axios.get(`${BASE_API_URL}/${args.countryCode}/${args.zipCode}`);
      return zippopotamResponse.data;
    }
  },
  ZipCode: {
    postCode: (parent) => parent['post code'],
    countryAbbreviation: (parent) => parent['country abbreviation']
  },
  Place: {
    placeName: (parent) => parent['place name'],
    stateAbbreviation: (parent) => parent['state abbreviation']
  }
};

module.exports = resolvers;