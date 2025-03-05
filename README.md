# Node.js Express API

## Overview
This is a Node.js backend project built with Express.js and PostgreSQL, deployed on AWS. It follows a structured architecture with controllers, services, middlewares, models, and routes. The project handles user-related operations, including creating and retrieving users using Knex.js as the query builder.

## Features

- REST API using Express.js
- PostgreSQL database with Knex.js
- Modular architecture with controllers and services
- Error handling and structured responses
- Uses `userService` for database operations
- Hosted on AWS

## Project Structure

```
├── config/         # Configuration files (includes database setup)
├── controllers/    # Handles request logic
├── middlewares/    # Middleware functions
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic layer
├── utils/          # Utility functions
├── app.js          # Main application entry point
```

### Running the Server

To start the server, run:

```sh
npm start
```

The server will run on `http://localhost:3000` (or your configured port).

## Project Structure Details

### Controllers

The controllers handle the incoming requests and delegate the logic to the services.

### Services

Services contain business logic and database operations.

### Routes

Routes define the API endpoints and connect them to the controllers.

## Dependencies

- Node.js
- Express.js
- PostgreSQL
- Knex.js
- AWS



