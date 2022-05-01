# Unstream Api Gateway

## Connect microservice

1. Duplicate the already existing us_streamchat folder (`src/us_streamchat`) and name it after your microservice
2. Add your configuration for connection in the `<your folder>/server.js` file
3. Create the types definition in the `<your folder>/typeDefs.js` file
   1. First, define the objects your microservice could response, take the existing as example of how the type syntax works.
   2. Then define the queries, they should be your `GET`requests
   3. Define the mutations, all functionalities that changes the state of your database as creating, updating or deleting an object
4. Define your queries and mutations in the `<your folder>/resolvers.js` file, they must have the same name as you defined it in the typedefs, provide the HTTP verb and the correct endpoint corresponding to that functionality.
5. Import your typedefs in the `src/graphQLSchema.js`, make sure you import all three objects: Typedefs, mutations and queries.
6. Put each object inside the corresponding string inside the schema merge definition. The first array is for typedefs, the second for queries and the last for mutations.
7. Build & run the docker (Refer to *Use a network for testing your API*)
8. Enter to [http://localhost:5000/graphiql](http://localhost:5000/graphiql)
9. Test your API

### Use a network for testing your API
1. Create a new network  
  `docker network create <your_network>`
2. Run your microservice's container adding this network flag so it will run using it  
  `--network=<your_network>` 
3. Build the Api Gateway  
   `docker build -t us_ag .`
4. Run the Api Gateway  
   `docker run -d -t -i -p 5000:5000 --network=<your_network> --name us_ag us_ag`