export const reportTypeDef = `
  type Report {
    id: String!
    reporter: String!
    cause: String!
    status: String!
    idMessage: String
    idStream: String
    assignedModerator: String
  }

  type CreateReportResponse {
    report: Report!
  }

  input ReportInput {
    reporter: String!
    cause: String!
    status: String!
    idMessage: String
    idStream: String
    assignedModerator: String
  }

  input UpdateReportInput {
    status: String!
    assignedModerator: String!
  }
`;

export const reportQueries = `
    uncheckedReports: [Report]!
    reportById(id: String!): Report!
`;

export const reportMutations = `
    createReport(report: ReportInput!): CreateReportResponse!
    updateReport(id: String!, info: UpdateReportInput!): String
    deleteReport(id: String!): String
`;
