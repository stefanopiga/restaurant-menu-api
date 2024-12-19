const { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLFloat, GraphQLInt } = require('graphql');
const menu = require('./data');

const MenuItemType = new GraphQLObjectType({
  name: 'MenuItem',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    appetizers: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.appetizers,
    },
    entrees: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.entrees,
    },
    sandwiches: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.sandwiches,
    },
    soupsAndSalads: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.soupsAndSalads,
    },
    fajitas: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.fajitas,
    },
    tacos: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.tacos,
    },
    enchiladas: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.enchiladas,
    },
    quiche: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.quiche,
    },
    greenSalads: {
      type: new GraphQLList(MenuItemType),
      resolve: () => menu.greenSalads,
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
