import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		GetUser: (_, { id }) =>
			generalRequest(`${URL}/user/${id}`, 'GET'),
	},
	Mutation: {
		CreateUser: (_, { CreateUserRequest }) =>
			generalRequest(`${URL}/newuser`, 'POST', CreateUserRequest),
		NewPassword: (_, { NewPasswordRequest }) =>
			generalRequest(`${URL}/repassword`, 'PUT', NewPasswordRequest),
		ValidateUser: (_, { ValidateUserRequest }) =>
			generalRequest(`${URL}/auth`, 'PUT', ValidateUserRequest),
		ValidateToken: (_, { ValidateTokenRequest }) =>
			generalRequest(`${URL}/validate`, 'PUT', ValidateTokenRequest),
	}    
};

export default resolvers;

 