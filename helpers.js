import { promises as fs } from "node:fs";

import { FILEPATH } from "archive/games.json";

export async function readGames() {
  try {
    const data = await fs.readFile(FILEPATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}

export async function writeGames(data) {
  try {
    await fs.writeFile(FILEPATH, JSON.stringify(data), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing file:", error);
    return false;
  }
}


export async function getGamePriceById(gameId) {
    try {
      // Read the JSON file
      const data = await fs.readFile(FILEPATH, "utf8");
      const games = JSON.parse(data);
  
      // Check if the game exists in the JSON
      if (games[gameId] && games[gameId].price !== undefined) {
        return games[gameId].price;
      } else {
        console.error("Game not found or price is missing for ID:", gameId);
        return null;
      }
    } catch (error) {
      console.error("Error reading file:", error);
      return null;
    }
  }