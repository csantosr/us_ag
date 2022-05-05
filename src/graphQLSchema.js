import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	roomMutations,
	roomQueries,
	roomTypeDef
} from './us_streamchat/rooms/typeDefs';

import { streamMutations, streamQueries, streamTypeDef } from './us_stream/typeDefs';

import roomResolvers from './us_streamchat/rooms/resolvers';
import streamResolvers from './us_stream/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		roomTypeDef,
		streamTypeDef
	],
	[
		roomQueries,
		streamQueries
	],
	[
		roomMutations,
		streamMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		roomResolvers, 
		streamResolvers,
	)
});
