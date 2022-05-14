export const searchTypeDef = `
  type res {
    users: [String]
    categories: [String]
  }`;

export const searchQueries = `
    search(username: String!): res
`;