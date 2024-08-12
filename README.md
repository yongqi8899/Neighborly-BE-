# Post Management API Server

This project is a Node.js Express API server designed for managing posts. It includes Swagger UI for testing and interacting with the API endpoints.

## Prerequisites

Before running this server, ensure you have the following installed:

- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:yongqi8899/Neighborly-BE-.git
   cd Neighborly-BE-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the server, run the following command:

```bash
npm run dev
```

The server will start running at [http://localhost:8080](http://localhost:8080)

## API Endpoints

The following endpoints are available:

### posts

- **POST /post** Create a new post.
- **GET /post** Get all post.
- **GET /post/:id** Get a single post by ID.
- **PUT /post/:id** Update an existing post.
- **DELETE /post/:id** Delete an post by ID.

### Auth

- **POST /auth/signup** Create a new user.
- **POST /auth/signin** Authenticates the user.
- **GET /auth/signout** logout.
- **GET /auth/me** Get the logged-in user.

## Configuration

Create a new `.env` file and then copy the contents of `example.env` into it, you may change the `JWT_SECRET` and `PORT` values.

