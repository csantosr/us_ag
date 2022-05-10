export const roomTypeDef = `
  type Message {
    date: String
    content: String!
    author: String!
  }
  type Room {
    roomId: String!
    messages: [Message]
    connections: [String]
    isStream: Boolean
  }
  input RoomInput {
    roomId: String!
    isStream: Boolean!
  }
  input JoinRoom {
    userId: String!
  }
  input MessageRoom {
    userId: String!
    content: String!
  }
`;

export const roomQueries = `
    allRooms: [Room]!
    roomById(id: String!): Room!
`;

export const roomMutations = `
    createRoom(room: RoomInput!): Room!
    joinRoom(id: String!, joinRoom: JoinRoom): Boolean
    messageRoom(id: String!, messageRoom: MessageRoom): Boolean
`;
