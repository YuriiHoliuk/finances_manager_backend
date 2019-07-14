# Finances manager backend
Node.js, express based API

## Project structure
- index.js - entry point to run application. Do not contain business logic, only system code. Create db connection, start express application etc.
- seed.js - file for development, initialize db structure and fill with default data.
- src/app.js - express server

### /router
Imports router that handle all endpoints in application. Each group of routes should be in separate file.
Router should not know about database, models and services. Router should import only controllers.

### /controllers
Each controller accept request and response objects, use some services to retrieve, save or modify data, then send response.
Controller should catch errors. Controller should import only services, should not know about database and models.

### /services
Service is place for business logic. Service perform manipulation on data, can use models to access db, communicate with other servers etc.
Service should not know about request, response objects.

### /models
Model is abstraction over some db record(table), have methods to easy perform CRUD operations.

### /middlewares
Functions that intercept http requests in express, to add common functionality(like logged in check and retrieve user).

## Scripts
- **start** - start server in production mode
- **start:dev** - start server in development mode, with nodemon to restart server on files changes
- **seed** - run initial db seeds(create tables etc.)
