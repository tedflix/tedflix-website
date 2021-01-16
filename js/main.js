function switch_tab(tab) {
    document.getElementById("content-home").style.display = "none";
    document.getElementById("content-about-us").style.display = "none";
    document.getElementById("content-cock-and-balls").style.display = "none";
    document.getElementById("content-college-essay-completion-services").style.display = "none";

    document.getElementById("content-" + tab).style.display = "";

    document.getElementById("tab-home").classList.remove("active");
    document.getElementById("tab-about-us").classList.remove("active");
    document.getElementById("tab-cock-and-balls").classList.remove("active");
    document.getElementById("tab-college-essay-completion-services").classList.remove("active");

    document.getElementById("tab-" + tab).classList.add("active");
}

function ready() {
    switch_tab("home");
}