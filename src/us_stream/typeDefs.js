export const streamTypeDef = `
  type StreamKey {
    key: String!
  }

  type StreamStatePath {
    state: String!
    path: String!
  }

  input setStreamInput {
    name: String!
    state: Boolean!
  }
`;

export const streamQueries = `
    getStreamState(uid: String!): StreamStatePath!
`;

export const streamMutations = `
    setStreamState(streamState: setStreamInput!): StreamStatePath!
    setStreamKey(uid: String!): StreamKey!
`;
