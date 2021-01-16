var active_tab = null
function switch_tab(tab) {
    if(active_tab != null){
        document.getElementById("content-" + active_tab).style.display = "none";
        document.getElementById("tab-" + active_tab).classList.remove("active");
    }
    
    document.getElementById("content-" + tab).style.display = "initial";
    document.getElementById("tab-" + tab).classList.add("active");
    active_tab = tab
}

function ready() {
    switch_tab("home");
}