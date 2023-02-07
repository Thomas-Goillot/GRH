const Pool = require("pg").Pool;

const pool = new Pool({
    user: "intranet",
    password: "intranet",
    host: "l11750300pgsql1dev",
    port: 5432,
    database: "grh"
});

module.exports = pool;