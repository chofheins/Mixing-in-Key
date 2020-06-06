var express = require('express');
var lastID = 1;
var ServerArray = [];
var SongObject = function (pTitle, pArtist, pBPM, pKey, pURL) {
    this.Title = pTitle;
    this.Artist = pArtist;
    this.BPM = pBPM;
    this.Key = pKey;
    this.URL = pURL;
    this.ID = lastID++;
}

ServerArray.push(new SongObject("Scylla", "RL Grime", 70, "1A", "https://www.youtube.com/watch?v=Kz1CqHw35Bs" ));

module.exports = myData;
