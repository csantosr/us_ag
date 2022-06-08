export const searchTypeDef = `
  type results {
    users: [String]
    categories: [String]
  }`;

export const searchQueries = `
    search(username: String!): results
`;