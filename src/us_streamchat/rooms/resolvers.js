import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allRooms: (_) =>
			getRequest(URL, ''),
		roomById: (_, { id }) =>
			getRequest(`${URL}/${id}`),
	},
	Mutation: {
		createRoom: (_, { room }) =>
			generalRequest(`${URL}/`, 'POST', room),
		joinRoom: (_, { id, joinRoom }) =>
			generalRequest(`${URL}/${id}/join`, 'POST', joinRoom),
		messageRoom: (_, { id, messageRoom }) =>
			generalRequest(`${URL}/${id}/message`, 'POST', messageRoom),
	}
};

export default resolvers;
