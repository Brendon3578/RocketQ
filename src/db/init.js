const Database = require("./config")
const fs = require("fs");

// just verify if you are not using two times this script :p
// to create DB two times or more
if (fs.existsSync('src/db/rocketq.sqlite')) {
    console.log(`
> Database is already created!

its time to use
    npm start`)
} else{
    const initDb = {
        async init(){
            const db = await Database()

            await db.exec(`CREATE TABLE rooms (
                id INTEGER PRIMARY KEY,
                pass TEXT
            )`);

            await db.exec(`CREATE TABLE questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                read INT,
                room INT
            )`);

            await db.close()
        }
    }

    console.log(`
> Database was created.

its time to use
    npm start`)

    initDb.init();
}