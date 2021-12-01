import 'reflect-metadata';

import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import depthLimit from 'graphql-depth-limit';
import { express as voyagerMiddleware } from 'graphql-voyager/middleware';

import { application } from './modules/application';
import { INTROSPECTION_ENABLED, QUERY_DEPTH_LIMIT, SERVER_PORT } from './utils/config';

const startApolloServer = async (): Promise<void> => {
  const schema = application.createSchemaForApollo();
  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    validationRules: [depthLimit(QUERY_DEPTH_LIMIT)],
  });

  await server.start();

  const app = express();
  app.disable('x-powered-by');

  if (true) {
    console.log('INTROSPECTION');
    const data = await import('./__generated__/introspection.json');
    app.post('/introspection', (_, res) => {
      return res.send({ data });
    });

    // we created the API above so that we can enable the introspection publicly
    // for the graphql server to access without having to pass the auth token
    // required in the /graphql path
    app.use('/explorer', voyagerMiddleware({ endpointUrl: './introspection' }));
  }

  server.applyMiddleware({ app });

  app.listen({ port: SERVER_PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${SERVER_PORT}/graphql`);
  });
};

startApolloServer();
