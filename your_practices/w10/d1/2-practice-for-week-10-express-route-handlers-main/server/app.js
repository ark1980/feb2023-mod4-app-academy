// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();
app.use(express.json());

// Your code here
// app.use((req, res, next) => {
//   console.log("Request body", req.body);
//   next();
// })

app.get("/artists", (req, res) => {
  const artists = getAllArtists();
  res.json(artists);
});

app.post("/artists",(req, res) => {
  res.status(201);
  res.json(addArtist(req.body));
})

app.get("/artists/latest", (req,res) => {
  res.json(getLatestArtist());
});

app.get("/artists/latest/albums", (req, res) => {
  res.json(getAlbumsForLatestArtist());
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}