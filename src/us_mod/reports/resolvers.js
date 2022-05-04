import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		uncheckedReports: (_) =>
			getRequest(URL, "unchecked"),
		reportById: (_, { id }) =>
			getRequest(URL, id),
	},
	Mutation: {
		createReport: (_, { report }) =>
			generalRequest(`${URL}`, 'POST', report),
		updateReport: (_, { id, info }) =>
			generalRequest(`${URL}/${id}`, 'PUT', info),
		deleteReport: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE'),
	}
};

export default resolvers;
