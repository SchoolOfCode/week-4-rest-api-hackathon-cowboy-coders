import { promises as fs } from "node:fs";

const FILEPATH = "archive/games.json";

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
    await fs.writeFile(FILEPATH, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing file:", error);
    return false;
  }
}


