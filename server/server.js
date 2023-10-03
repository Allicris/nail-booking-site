// const express = require('express');
// const path = require('path');
// const db = require('./config/connection');
// // const routes = require('./routes');

// const { ApolloServer, gql } = require('@apollo/server');
// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');

// const app = express();
// const PORT = process.env.PORT || 3001;

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// })

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// const startApolloServer = async (typeDefs, resolvers) => {
//   await server.start();
//   //server.applyMiddleware({ app });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`🌍 Now listening on localhost:${PORT}`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     })
//   });
// }

// // app.use(routes);

// // db.once('open', () => {
// //   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// // });
// startApolloServer(typeDefs, resolvers);

const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static(path.join(__dirname, 'build')))
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
  startApolloServer();
