# Book API with CRUD Operations

This project is a Node.js API server with CRUD operations for managing a collection of APIs. The API uses MongoDB as the database.

## Features

- Create, Read, Update, and Delete API in the MongoDB database.
- Uses Express.js for the server and Mongoose for MongoDB interactions.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/rest-api-server.git
    cd rest-api-server
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add your MongoDB connection string and the port number:

    ```plaintext
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    PORT=3000
    ```

4. **Seed the database (optional):**

    To seed the database with initial data, run:

    ```sh
    npm run data:import
    ```

    To destroy the seeded data, run:

    ```sh
    npm run data:destroy
    ```

### Running the Server

Start the server in development mode with:

```sh
npm run dev
```
## api for CREATE, READALL, READ, UPDATE, DELETE

### create record 
```sj
http://localhost:3000/api/create
```

### get all data 

```sj
http://localhost:3000/api/getAll
```

### get data by id

```sj
http://localhost:3000/api/[give_id]
```
### update record by id

```sj
http://localhost:3000/api/update/[give_id]
```
### delete record by id

```sj
http://localhost:3000/api/delete/[give_id]
```




