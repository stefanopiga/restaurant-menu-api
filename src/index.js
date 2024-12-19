const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();
const PORT = 4000;

// Configurazione di GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // Interfaccia per testare le query
  })
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
