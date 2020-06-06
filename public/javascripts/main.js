var lastID = 1;
var songArray = [];
var SongObject = function (pTitle, pArtist, pBPM, pKey, pURL) {
    this.Title = pTitle;
    this.Artist = pArtist;
    this.BPM = pBPM;
    this.Key = pKey;
    this.URL = pURL;
    this.ID = lastID++;
}

// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {

    // this will refresh the data each time you navigate back to the Home page
    $(document).on('pagebeforeshow', '#Home', function () {
    }
    );

    // this will refresh the data each time you navigate back to the MyMix page
    $(document).on('pagebeforeshow', '#MyMix', function () {
    }
    );

     // this will clear the text boxes  each time you navigate back to the Find page
     $(document).on('pagebeforeshow', '#Find', function () {
        document.getElementById("titleinput").value = "";
        document.getElementById("artistinput").value = "";  
        document.getElementById("bpminput").value = ""; 
        document.getElementById("keyinput").value  = ""; 
    }
    );

    // this will refresh the data each time you navigate to the FindSongs page
    $(document).on('pagebeforeshow', '#NewSongs', function () {
    }
    );

}
);