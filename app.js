// Plan - Steam Games 

// MVP1 - basic API that reads data and returns the entire list of games
// set up new directory for project and initialise node.js, install express.js ✅
// set up app.js set up server
// create get endpoint to retrieve all games
// create async functions to call required data

// MVP2- implement simple search and filter functionality - more useful 
// Implement search/filter by genre
// Implement search by name get by id
// Update using patch to update price of a game
// Delete a game from database 
// Add a new game to the database

// MVP3 - filter by price/sale
// paginate api


import express from "express";
import fs from "fs";

const app = express();
const port = 3000;



import { 
    readGames,
    writeGames,
    getGamePriceById,
} from "helpers.js";
app.use(express.json());

const loadData = () => {
    const rawData = fs.readFileSync("archive/games.json", "utf8");
    return JSON.parse(rawData);
};

app.get("/games/:id/price", async function (req, res) {
    const id = req.params.id;
    const price  = await getGamePriceById(id);
    res.json(price);
})





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////






































app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});