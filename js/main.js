var active_tab = null;
function switch_tab(tab) {
    if(active_tab != null){
        document.getElementById("content-" + active_tab).style.display = "none";
        document.getElementById("tab-" + active_tab).classList.remove("active");
    }
    
    document.getElementById("content-" + tab).style.display = "block";
    document.getElementById("tab-" + tab).classList.add("active");
    active_tab = tab;
}

function ready() {
    switch_tab("home");
    hide();
}

//https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function make_id() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   
   document.getElementById("upcat-code").innerHTML = result;
}

function unlock() {
    var stuff = document.getElementsByClassName("not-safe");
    for(var i=0; i<stuff.length; i++){
        stuff[i].style.display = "";
    }
}

function hide() {
    var stuff = document.getElementsByClassName("not-safe");
    for(var i=0; i<stuff.length; i++){
        stuff[i].style.display = "none";
    }
}