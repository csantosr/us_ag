import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}`;

const resolvers = {
	Query: {
		GetUser: (_, { id }) =>
			generalRequest(`${URL}/user/${id}`, 'GET'),
	},
	Mutation: {
		CreateUser: (_, { user }) =>
			generalRequest(`${URL}/newuser`, 'POST', user),
		NewPassword: (_, { newpasswordreq }) =>
			generalRequest(`${URL}/repassword`, 'PUT', newpasswordreq),
		ValidateUser: (_, { validateuserreq }) =>
			generalRequest(`${URL}/auth`, 'PUT', validateuserreq),
		ValidateToken: (_, { validatetokenreq }) =>
			generalRequest(`${URL}/validate`, 'PUT', validatetokenreq),
	}    
};

export default resolvers;

 