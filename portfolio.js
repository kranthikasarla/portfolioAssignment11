let darkThemeEl = document.getElementById('dark-mode');

darkThemeEl.addEventListener('click', function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
    document.getElementById("header").style.color = "white";
    document.getElementById("nav-item").style.color = "white";
    document.getElementById("nav-item-1").style.color = "white";
    document.getElementById("item-2").style.color = "white";
    document.getElementById("item-3").style.color = "white";

})
