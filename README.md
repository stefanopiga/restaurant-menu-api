# Restaurant Menu API

## Description

This API provides data for a restaurant menu application. It is developed with **Node.js** and **GraphQL** to demonstrate backend development skills and API design.

---

## Features

- Access structured data for a restaurant menu (appetizers, entrees, sandwiches, and more).
- Query only the data you need using **GraphQL**.
- Ready-to-use endpoints for menu categories.
- Easily extendable and maintainable.

---

## Dependencies

- **Node.js**: JavaScript runtime environment for the server.
- **Express**: Framework for handling HTTP requests.
- **GraphQL**: Query language for the API.
- **Nodemon**: Tool for automatically restarting the server during development.

---

## Installation

### Clone the repository:

```bash
git clone <URL_DEL_REPOSITORY>
cd restaurant-menu-api
```

## Install dependencies

```bash
npm install
```

---

## STARTING the SERVER

    Start the server in development mode:

```bash
npx nodemon src/index.js
```

---

## Access the GraphQL playground in the browser:

```bash
http://localhost:4000/graphql
```

## EXAMPLES OF QUERIES

```bash
Appetizer

{
  appetizers {
    id
    name
    price
  }
}




Entrees

{
  entrees {
    id
    name
    price
  }
}



Sandwiches

{
  sandwiches {
    id
    name
    price
  }
}

```

## Testing

    To run automated tests:

```bash
npm test
```

## Notes

    This project is designed to be modular and easily extensible.
    If additional categories are required, simply update data.js and schema.js.
