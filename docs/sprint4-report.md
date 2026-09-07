# Sprint 4 – Project Scaffolding and Development Setup

## 1. Sprint Title

Project Scaffolding and Development Setup

## 2. Project Name

Gym Management System

## 3. Objective

The objective of this sprint was to set up the development environment and create the basic project structure for the Gym Management System using the MERN stack.

## 4. Technology Stack

- MongoDB
- Express.js
- React.js
- Node.js
- npm
- Visual Studio Code
- Git and GitHub

## 5. Frontend Setup

- Created the React frontend using Vite.
- Installed the required frontend dependencies.
- Verified that the React application runs successfully.
- Tested the application using the local development server.

Frontend URL:

http://localhost:5173

## 6. Backend Setup

- Created the server folder.
- Initialized the Node.js project using npm.
- Installed Express.js, Mongoose, CORS, and dotenv.
- Installed Nodemon as a development dependency.
- Created the basic Express server.
- Configured the server to run on port 5000.
- Verified that the backend API is running successfully.

Backend URL:

http://localhost:5000

## 7. Backend Folder Structure

The backend was organized into the following folders:

- config – Configuration files
- controllers – Request handling logic
- middleware – Middleware functions
- models – Database models
- routes – API routes
- services – Business logic
- utils – Utility functions

## 8. Environment Configuration

A `.env` file was created to store environment variables such as:

- Server port
- MongoDB connection URL

Sensitive environment files are excluded from Git using `.gitignore`.

## 9. Development Scripts

The backend was configured with the following scripts:

- `npm start` – Starts the server normally.
- `npm run dev` – Starts the server using Nodemon during development.

## 10. Testing and Verification

The frontend was tested using:

http://localhost:5173

The backend was tested using:

http://localhost:5000

The backend successfully displayed:

"Gym Management System API is running"

This confirmed that the basic frontend and backend setup was working correctly.

## 11. Expected Outcome

At the end of Sprint 4, the Gym Management System had a properly organized MERN project structure with a working React frontend and Express backend. The development environment was ready for further application development.

## 12. Conclusion

Sprint 4 successfully established the basic development environment and project scaffolding for the Gym Management System. The frontend, backend, required dependencies, folder structure, environment configuration, and development scripts were successfully set up and tested.