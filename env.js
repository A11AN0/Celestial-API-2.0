//Use .env to get a database url (gitignored to protect the password :)
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    database_url: process.env.DATABASE_URL,
};
