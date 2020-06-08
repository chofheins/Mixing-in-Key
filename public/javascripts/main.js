let songArray = [];
let mixArray = [];
let mymixArray = [];
var SongObject = function (pTitle, pArtist, pBPM, pKey, pURL) {
    this.Title = pTitle;
    this.Artist = pArtist;
    this.BPM = pBPM;
    this.Key = pKey;
    this.URL = pURL;
}

// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
    $.get("/data", function(dataArray, status) {
        songArray = dataArray;
    });

     // this will clear the text boxes  each time you navigate back to the Find page
     $(document).on('pagebeforeshow', '#Find', function () {
        mixArray = [];
        document.getElementById("titleinput").value = "";
        document.getElementById("artistinput").value = "";  
        document.getElementById("bpminput").value = ""; 
        document.getElementById("keyinput").value  = "";
    });

    //Find songs in database array on submit
    document.getElementById("submit").addEventListener("click", function () {
        let title = document.getElementById("titleinput").value;
        let artist = document.getElementById("artistinput").value;
        let bpm = parseInt(document.getElementById("bpminput").value);
        let key = document.getElementById("keyinput").value;
        
        for (let i = 0; i < songArray.length; i++) {
            if (songArray[i].BPM >= bpm -2 && songArray[i].BPM <= bpm + 2) {
                let numKey = parseInt(songArray[i].Key)
                if (numKey >= parseInt(key) - 1 && numKey <= parseInt(key) + 1) {
                    mixArray.push(new SongObject(songArray[i].Title, songArray[i].Artist, songArray[i].BPM, songArray[i].Key, songArray[i].URL));
                }
                if (parseInt(key) == 1) {
                    if (numKey == 12) {
                        mixArray.push(new SongObject(songArray[i].Title, songArray[i].Artist, songArray[i].BPM, songArray[i].Key, songArray[i].URL));
                    }
                }
                else if (parseInt(key) == 12) {
                    if (numKey == 1) {
                        mixArray.push(new SongObject(songArray[i].Title, songArray[i].Artist, songArray[i].BPM, songArray[i].Key, songArray[i].URL));
                    }
                }
            }
        }
        console.log(mixArray);
    });

    // this will refresh the data each time you navigate to the FindSongs page
    $(document).on('pagebeforeshow', '#NewSongs', function () {
        document.getElementById("resultslist").innerHTML = "";
        for (let i = 0; i < mixArray.length; i++) {
            let label = document.createElement("label");
            label.setAttribute("class", "container");
            label.setAttribute("for", "song" + i);
            label.setAttribute("id", "label" + (i + 1));
            document.getElementById("resultslist").append(label);
            document.getElementById("label" + (i + 1)).innerHTML
                = mixArray[i].BPM + " bpm - <span style='color: red;'>" + mixArray[i].Key + "</span> - " + mixArray[i].Title 
                + " - By " + mixArray[i].Artist + "<br> <a target='_blank' href='" + mixArray[i].URL + "'>Listen on Youtube</a>";

            let input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "song" + i);
            input.setAttribute("id", "song" + i);
            document.getElementById("label" + (i + 1)).append(input);

            let span = document.createElement("span");
            span.setAttribute("class", "checkmark");
            document.getElementById("label" + (i + 1)).append(span);
        }
    });

    //Add selected songs to 'my mix'
    document.getElementById("addmix").addEventListener("click", function () {
        for (let i = 0; i < mixArray.length; i++) {
            let check = document.getElementById("song" + i).checked;
            if (check == true) {
                mymixArray.push(new SongObject(mixArray[i].Title, mixArray[i].Artist, mixArray[i].BPM, mixArray[i].Key, mixArray[i].URL));
            }
        }
        console.log(mymixArray);
    });

    //Function to load my mix data
    function myMixLoad() {
        document.getElementById("mymixlist").innerHTML = "";
        for (let i = 0; i < mymixArray.length; i++) {
            let label = document.createElement("label");
            label.setAttribute("class", "container");
            label.setAttribute("for", "mixsong" + i);
            label.setAttribute("id", "mixlabel" + (i + 1));
            document.getElementById("mymixlist").append(label);
            document.getElementById("mixlabel" + (i + 1)).innerHTML
                = mymixArray[i].BPM + " bpm - <span style='color: red;'>" + mymixArray[i].Key + "</span> - " + mymixArray[i].Title 
                + " - By " + mymixArray[i].Artist + "<br> <a target='_blank' href='" + mymixArray[i].URL + "'>Listen on Youtube</a>";

            let input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", "mixsong" + i);
            input.setAttribute("id", "mixsong" + i);
            document.getElementById("mixlabel" + (i + 1)).append(input);

            let span = document.createElement("span");
            span.setAttribute("class", "checkmark");
            document.getElementById("mixlabel" + (i + 1)).append(span);
        }
    }

    // this will refresh the data each time you navigate back to the MyMix page
    $(document).on('pagebeforeshow', '#MyMix', function () {
        myMixLoad();
    });

    //Remove selected song with button press
    document.getElementById("removemix").addEventListener("click", function () {
        for (let i = 0; i < mymixArray.length; i++) {
            let check = document.getElementById("mixsong" + i).checked;
            if (check == true) {
                console.log(mymixArray);
                mymixArray.splice(i, 1);
                console.log(mymixArray);
            }
        }
        myMixLoad();
    });

    //Clear my mix and refresh data shown
    document.getElementById("clearmix").addEventListener("click", function () {
        mymixArray = [];
        myMixLoad();
    });
});