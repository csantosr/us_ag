export const searchTypeDef = `
  type Results {
    users: [String]
    categories: [String]
  }`;

export const searchQueries = `
    search(username: String!): Results
`;