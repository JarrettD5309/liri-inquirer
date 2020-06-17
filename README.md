# Liri Inquirer App
<https://github.com/JarrettD5309/liri-inquirer> \
Version 1.0 \
Original Deployment Date - June 17, 2020\
By Jarrett Dougherty

## Description
Liri Inquirer App is a Node.js program which can search and return data from Spotify, Bands In Town, and OMDB using API calls. Easily understood Inquirer prompts will quickly allow the user to access returned data from the command line terminal. All search commands and returned data will be stored in a `log.txt` file. The app creates a simple way to search for multiple types of entertainment information from a single program.

## Technologies Used
* Javascript
* Node.JS
* Axios
* Dotenv
* Moment
* Node Spotify API
* Inquirer

## Instructions For Use
### Getting Started
1. Once you download the program you will need to run the following command to install the required node packages:

```console
$ npm install
```

2. You will also need to get a Spotify ID and Secret from <https://developer.spotify.com/my-applications/#!/>

3. Next, create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```

### Running Liri
1. Enter the following code to start the program.

```console
$ node liri.js
```

2. You will see the following prompt. Choose an option using your arrows and enter key.

```console
? Which would you like to do? (Use arrow keys)
> Search for a song on Spotify
  Search for a film on OMDB
  Search for an artist on Bands in Town
  Do what It Says
```

3. Depending on which search option you choose, you will be asked for more information. For example to search Spotify you would see the following. Enter the requested information using your keyboard and enter key.

```console
? What song would you like to search for?
```

4. Liri will return information from your search. For example if you search Spotify for the song 'Sonic Destroyer' you would see the following returned in the terminal. This search is also logged in the `log.txt` file.

```console
Artist: Various Artists
Song Title: Sonic Destroyer
Song Link: https://open.spotify.com/track/4w31w8mav08rbMgBpl54PL
Album Title: SubBerlin (The Story of Tresor)
Command and Data Logged
```

5. There is a special search option called 'Do What It Says'. This runs whatever search type is saved in the `random.txt` file.

## GIF/Video Example
![liri gif](https://media.giphy.com/media/mGWZopQqazvhgjtHk4/giphy.gif)

full video example - <https://drive.google.com/file/d/1W3USBxknh4swgF3RhLPVNaOR-GQ98M-C/view?usp=sharing>