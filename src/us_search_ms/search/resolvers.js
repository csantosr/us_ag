import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		search: (_, { term }) =>
			generalRequest(`${URL}/${term}`, 'GET'),
	}
};

export default resolvers;
