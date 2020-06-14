// Read and set environment variables
require("dotenv").config();

var Spotify = require('node-spotify-api');

var moment = require('moment');

var axios = require('axios');

var fs = require("fs");

var inquirer = require('inquirer');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

inquirer
    .prompt([
        {
            type: "list",
            message: "Which would you like to do?",
            choices: ["Search for a song on Spotify", "Search for a film on OMDB", "Search for an artist on Bands in Town", "Do What It Says"],
            name: "searchOption"
        }
    ])
    .then(function (inquirerResponse) {
        console.log(inquirerResponse.searchOption);
    });