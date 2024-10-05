**Todo List App Setup Instructions**

Prerequisites:
  Node.js and npm installed
  PostgreSQL installed

Setup Steps:

Clone the repository:
  git clone [your-repo-url]
  cd [your-repo-name]

Install dependencies:
  npm install

Set up the database:
  Create a PostgreSQL database
  Update the database connection details in the backend configuration file

Set up environment variables:

  Create a .env file in the root directory
  Add necessary environment variables (PG_PASSWORD, PORT)
  PG_PASSWORD = password of PostgreSQL user of the database in use

Start the backend server:
npm run server

In a new terminal, start the frontend development server:
npm run start

Open a web browser and navigate to http://localhost:3000 (or whatever port you've specified)

Note:
Ensure that the backend API URL in the frontend code matches your local setup.
