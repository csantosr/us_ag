export const searchTypeDef = `
  type Results {
    users: [String]
    categories: [String]
  }`;

export const searchQueries = `
    searchByTerm(term: String!): Results
`;