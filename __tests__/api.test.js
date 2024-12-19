const request = require('supertest');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../src/schema');

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: false,
  })
);

describe('Restaurant Menu API', () => {
  test('Fetch all appetizers', async () => {
    const query = `
      {
        appetizers {
          id
          name
          price
        }
      }
    `;
    const response = await request(app).post('/graphql').send({ query });
    expect(response.status).toBe(200);
    expect(response.body.data.appetizers).toEqual([
      { id: 1, name: 'Iceberg Wedge Salad with House Cured Bacon – tomato salsa gorgonzola', price: 7.5 },
      { id: 2, name: 'Sautéed Shredded Brussels Sprouts – bacon hazelnuts gorgonzola', price: 6.95 },
      { id: 3, name: 'Kale Salad – parmesan crisp corn radish garlic-lemon vinaigrette', price: 7.5 },
      { id: 4, name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto - grilled tomato salsa crostini', price: 6.95 },
      { id: 5, name: 'Chicken and Cabbage Eggrolls hot & sour dipping sauce', price: 6.95 },
    ]);
  });

  test('Fetch all entrees', async () => {
    const query = `
      {
        entrees {
          id
          name
          price
        }
      }
    `;
    const response = await request(app).post('/graphql').send({ query });
    expect(response.status).toBe(200);
    expect(response.body.data.entrees).toEqual([
      { id: 1, name: 'Farfalle Pasta with Braised Pork in Tomato Cream – capers butternut squash kale', price: 12.95 },
      { id: 2, name: 'Stout Braised Bratwurst - horseradish mashed potatoes roasted root veggies grilled onion', price: 13.95 },
      { id: 3, name: 'Salmon & Crispy Tofu in Yellow Curry Sauce – vegetable sauté golden raisin chutney', price: 15.95 },
      { id: 4, name: 'Sesame Shrimp – udon noodles ramen broth shiitake mushrooms bean sprouts scallions', price: 13.95 },
    ]);
  });

  test('Fetch all fajitas', async () => {
    const query = `
      {
        fajitas {
          id
          name
          price
        }
      }
    `;
    const response = await request(app).post('/graphql').send({ query });
    expect(response.status).toBe(200);
    expect(response.body.data.fajitas).toEqual([
      { id: 1, name: 'Chicken Onions, Poblano and Bell Peppers, Guacamole, Two Salsas', price: 10.95 },
      { id: 2, name: 'Sirloin Steak, Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas', price: 10.95 },
    ]);
  });

  test('Return error for invalid query', async () => {
    const query = `
      {
        invalidField {
          id
        }
      }
    `;
    const response = await request(app).post('/graphql').send({ query });
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});
