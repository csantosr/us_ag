export const sesionTypeDef = `
input CreateUserInput {
  Email: String!
  Password: String!
  Status: String!
  UserName: String!
}
type GetUserInput {
  Id: String
}
type GetIdInput {
	UserName: String
}
type Id {
	id: String!
}
type User {
  email: String 
  status: String 
  username: String 
}
input ValidateUserInput {
  email: String!
  password: String! 
}
type token {
  token: String!
}
input NewPasswordInput {
  Email: String!
  Password: String!
  RePassword: String!
}
type ok {
  ok: String 
}
type Users {
	username1: String
	username2: String
	username3: String
	username4: String
	username5: String 
}
input ValidateTokenInput {
  Email: String! 
  Token: String! 
}`;

export const sesionQueries = `
  GetUser(id: String!): User!
  GetId(username: String!): Id!
  GetUsers: Users!
`;

export const sesionMutations = `
  CreateUser(CreateUserRequest: CreateUserInput!): token!
  ValidateUser(ValidateUserRequest: ValidateUserInput!): token!
  ValidateToken(ValidateTokenRequest: ValidateTokenInput!): token!
  NewPassword(NewPasswordRequest: NewPasswordInput!): ok!
`;

/*
   

CreateUserInput {
		Email    string `json:"email"`
		Password string `json:"password"`
		Status   string `json:"status"`
		UserName string `json:"username"`
	}
	CreateUserResponse {
		Token string `json:"token"`
	}

	GetUserInput {
		Id string `json:"id"`
	}
	GetUserResponse {
		Email    string `json:"email"`
		Status   string `json:"status"`
		UserName string `json:"username"`
	}

	ValidateUserInput {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	ValidateUserResponse {
		Token string `json:"token"`
	}

	NewPasswordInput {
		Email      string `json:"email"`
		Password   string `json:"password"`
		RePassword string `json:"repassword"`
	}
	NewPasswordResponse {
		Ok string `json:"ok"`
	}

	ValidateTokenInput {
		Email string `json:"email"`
		Token string `json:"token"`
	}

	ValidateTokenResponse {
		Token string `json:"token"`
	}

 
*/
