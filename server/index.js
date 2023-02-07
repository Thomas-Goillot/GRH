const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//get all Agents
app.get("/agent", async (req, res) => {
    try {
        const allAgents = await pool.query("SELECT * FROM agent");
        res.json(allAgents.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a agent by id
app.get("/agent/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const agent = await pool.query("SELECT * FROM agent WHERE num_agent = $1", [id]);
        res.json(agent.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
    })
