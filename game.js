
import { readGames, writeGames} from "./helpers.js"

export async function getGames() {
    const allGames = await readGames();
    return allGames;
}

export async function getGameById(id) {
    const specificGame = await readGames();
    if (specificGame[id]) {
    return specificGame[id];
    }
}

export async function getGamePriceById(id) {
    const price = await readGames()
    const found = price.find((price) => price.id === id);
    return found;
};



// export async function getGameByPrice
// read games data await readGame
//  
// filter the games based on price 
// if no games have specified price return NO 
// return filtered games 

/* export async function getGameByPrice() {
    const games = await readGame();
    const filterGames = games.filter(game => game.price === targetPrice);
    if (filterGames.length === 0) {
        return "No games found at the price";
    }
    return filterGames;
}; */

