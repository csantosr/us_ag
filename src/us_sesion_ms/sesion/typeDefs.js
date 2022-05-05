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
type User {
  Email: String 
  Status: String 
  UserName: String 
}
input ValidateUserInput {
  Email: String 
  Password: String 
}
type Token {
  Token: String
}
input NewPasswordInput {
  Email: String 
  Password: String 
  RePassword: String 
}
type Ok {
  Ok: String 
}
input ValidateTokenInput {
  Email: String 
  Token: String 
}`;

export const sesionQueries = `
  GetUser(id: String!): User!
`;

export const sesionMutations = `
  CreateUser(user: CreateUserInput!): Token!
  ValidateUser(req: ValidateUserInput!): Token!
  ValidateToken(req: ValidateTokenInput!): Token!
  NewPassword(req: NewPasswordInput!): Ok!
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
