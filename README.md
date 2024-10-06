**Todo List App Setup Instructions**
Project tutorial from: [https://www.youtube.com/watch?v=fQcr1_8v2xU]

**Prerequisites:**
Node.js and npm installed
PostgreSQL installed

Setup Steps:

**Clone the repository:**
git clone [https://github.com/keanu-c/Todo-List.git]
cd Todo-List-PostgreSQL/

**Set up the database:**
Create a PostgreSQL database named: [todo-db]
Copy and paste this query into a _table_ in [todos-db] in PostgreSQL:

```SQL
CREATE TABLE todo_table (
    todo_id SERIAL PRIMARY KEY,
    todo_desc VARCHAR(255),
    todo_completed BOOLEAN DEFAULT false
)
```

Update the database connection details in the backend configuration file: [db.js]

**Set up environment variables:**

Create a .env file in the root directory
Add necessary environment variables (PG_PASSWORD, PORT)
PG_PASSWORD = password of PostgreSQL user of the database [todos-db]

**In a new terminal, start the backend server:**
cd server/
npx nodemon

**In a new terminal, start the frontend development server:**
cd client/
npm run dev

Open a web browser and navigate to http://localhost:number (whatever port VITE specified in the terminal)

_Note:_
Ensure that the backend API URL in the frontend code matches your local setup.
