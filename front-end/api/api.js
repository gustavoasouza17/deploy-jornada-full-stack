// Fetch ou axios
import "dotenv/config";
import axios from "axios"; // permite fazer qualquer requisição

// const { NODE_ENV } = process.env;
const URL = "https://deploy-jornada-full-stack-qtwd.onrender.com/api";

const responseArtist = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

// console.log(responseArtist.data);
