import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	roomMutations,
	roomQueries,
	roomTypeDef
} from './us_streamchat/rooms/typeDefs';

import roomResolvers from './us_streamchat/rooms/resolvers';

import {
	reportMutations,
	reportQueries,
	reportTypeDef
} from './us_mod/reports/typeDefs';

import reportResolvers from './us_mod/reports/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		roomTypeDef,
		reportTypeDef
	],
	[
		roomQueries,
		reportQueries
	],
	[
		roomMutations,
		reportMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		roomResolvers,
		reportResolvers
	)
});
