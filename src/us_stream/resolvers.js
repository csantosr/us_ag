import { generalRequest, getRequest } from '../utilities';
import { hls_url, hls_port, hls_entryPoint, auth_url, auth_entryPoint, auth_port } from './server';

const HLS_URL = `http://${hls_url}:${hls_port}/${hls_entryPoint}`;
const AUTH_URL = `http://${auth_url}:${auth_port}/${auth_entryPoint}`;

const resolvers = {
	Query: {
		getStreamState: (_, { uid }) =>
			getRequest(`http://${hls_url}:${hls_port}`, hls_entryPoint, {uid: uid}),
	},
	Mutation: {
		setStreamKey: (_, { uid }) => 
			generalRequest(`${AUTH_URL}/`, 'POST', {name: uid}),
		setStreamState: (_, { streamState }) =>
			generalRequest(`${HLS_URL}/`, 'POST', streamState),
	}
};

export default resolvers;
