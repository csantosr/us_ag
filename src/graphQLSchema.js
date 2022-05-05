import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	roomMutations,
	roomQueries,
	roomTypeDef
} from './us_streamchat/rooms/typeDefs';
import {
	sesionMutations,
	sesionQueries,
	sesionTypeDef
} from './us_sesion_ms/sesion/typeDefs';

import {
	searchQueries,
	searchTypeDef
} from './us_search_ms/search/typeDefs';

import { streamMutations, streamQueries, streamTypeDef } from './us_stream/typeDefs';

import roomResolvers from './us_streamchat/rooms/resolvers';

import streamResolvers from './us_stream/resolvers';

import sesionResolvers from './us_sesion_ms/sesion/resolvers';
import searchResolvers from './us_search_ms/search/resolvers';

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
		streamTypeDef,
    reportTypeDef,
		sesionTypeDef,
		searchTypeDef
	],
	[
		roomQueries,
		streamQueries,
    searchQueries,
		sesionQueries,
   	reportQueries
	],
	[
		roomMutations,
		streamMutations,
    sesionMutations,
    reportMutations,
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		roomResolvers, 
		streamResolvers,
    sesionResolvers,
		reportResolvers
	)
});
