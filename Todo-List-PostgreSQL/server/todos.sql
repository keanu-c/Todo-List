CREATE TABLE todo_table (
    todo_id SERIAL PRIMARY KEY,
    todo_desc VARCHAR(255),
    todo_completed BOOLEAN DEFAULT false
)
