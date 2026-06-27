# File Based Task Manager

A simple task management app built with Node.js, Express.js, and EJS — using the filesystem (`fs` module) instead of a database to practice core backend concepts.

## What it does
- Create a task (saved as a `.txt` file)
- View all tasks (listed from the `files/` folder)
- Read full task details
- Rename a task file

## Tech used
- Node.js + Express.js
- EJS (server-side rendering)
- Node's `fs` module for storage (no database)
- Tailwind CSS for styling

## Why file-based storage
Built this without a database on purpose — to focus on understanding Express routing, middleware, and form handling before introducing MongoDB.

## Known limitations
- No delete functionality yet
- No input validation
- File-based storage isn't suitable for production use

## Run locally
\`\`\`bash
npm install
node index.js
\`\`\`
Visit `http://localhost:3000`
