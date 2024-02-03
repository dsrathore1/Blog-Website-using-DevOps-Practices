import { Pool } from "pg";

export const client = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PWD,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
});


//! When I am trying with Client function then I need to use this connect function 
// client.connect(function (err) {
//     if (err) throw err;
//     console.log('Your database is connected 🎉');
// });
