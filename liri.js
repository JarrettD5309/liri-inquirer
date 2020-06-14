// Read and set environment variables
require("dotenv").config();

var Spotify = require('node-spotify-api');

var moment = require('moment');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });