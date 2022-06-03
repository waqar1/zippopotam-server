const { gql } = require('apollo-server');

const typeDefs = gql`
  type ZipCode {
    postCode: String
    country: String
    countryAbbreviation: String
    places: [Place]
  }

  type Place {
    placeName: String
    longitude: String
    state: String
    stateAbbreviation: String
    latitude: String
  }

  type Query {
    zipCodeInfo(countryCode: String!, zipCode: String!): ZipCode
  }
`;

module.exports = typeDefs;