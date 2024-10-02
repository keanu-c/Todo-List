CREATE TABLE todo_table (
    todo_id SERIAL PRIMARY KEY,
    todo_desc VARCHAR(255), /* store strings with max length of 255 characters */
    todo_completed BOOLEAN DEFAULT false
)
