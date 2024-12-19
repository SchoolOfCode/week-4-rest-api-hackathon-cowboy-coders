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
    getGames,
    getGameById,
    getGamePriceById
} from "./game.js";

app.use(express.json());


app.get("/", function (req, res) {
    res.send("Welcome to Steam Games");
});

//Get all games 
app.get("/games", async function (req, res) {
    try {
        const allGames = await getGames(); // Attempt to fetch games
        res.json(allGames); // Respond with the data
    } catch (error) {
        console.error("Error fetching games:", error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while fetching the games." }); // Send a 500 status with a message
    }
});

//Get a specific game using its ID
app.get("/games/:placeholder", async function (req, res) {
    try {
        const id = req.params.placeholder;
        const specificGame = await getGameById(id); // Get game from its ID
        res.json(specificGame); // Respond with the Game data
    }   catch (error) {
        console.error("Error fetching game:", error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while fetching this game." }); // Send a 500 status with a message
    }
});

//Get a specific game's price using its ID
app.get("/games/:id/price", async function (req, res) {
    try {
        const id = req.params.id;
        const price  = await getGamePriceById(id); // Get game from its ID
        res.json(price); // Respond with the price of the Game 
    }   catch (error) {
        console.error("Error fetching game:", error); // Log the error for debugging
        res.status(500).json({ error: "An error occurred while fetching this game." }); // Send a 500 status with a message
    }
});

// 
/* app.get("/games/price", async function (req, res) {
    const price = req.params.price;
    const games = await getGameByPrice(price);
    res.json(games);
})*/


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




/* const loadData = () => {
    const rawData = fs.readFileSync("archive/games.json", "utf8");
    return JSON.parse(rawData);
}; */