import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allRooms: (_) =>
			getRequest(URL, ''),
		roomById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createRoom: (_, { room }) =>
			generalRequest(`${URL}/`, 'POST', room),
	}
};

export default resolvers;
