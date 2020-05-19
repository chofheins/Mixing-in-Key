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
        document.getElementById("title").value = "";
        document.getElementById("artist").value = "";  
        document.getElementById("bpm").value = ""; 
        document.getElementById("key").value  = ""; 
    }
    );

    // this will refresh the data each time you navigate to the FindSongs page
    $(document).on('pagebeforeshow', '#NewSongs', function () {
    }
    );

}
);