import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		search: (_, { username }) =>
			generalRequest(`${URL}/${username}`, 'GET'),
	}
};

export default resolvers;
