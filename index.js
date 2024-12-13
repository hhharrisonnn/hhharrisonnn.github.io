// scroll back to the top arrow
let topArrow = document.getElementById("arrow");

document.getElementById("arrow").addEventListener("click", function() {
    topFunction();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topArrow.style.display = "";
    } else {
        topArrow.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// slideshow
// let index = 0
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slides")
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     index++;
//     if (index > slides.length) {
//         index = 1;
//     }
//     slides[index-1].style.display = "block";
//     setTimeout(showSlides, 20000);
// }

// portfolio grids
document.getElementById("theperfectwoman").addEventListener("click", function() {
    openTab("theperfectwoman");
})
document.getElementById("fantasy").addEventListener("click", function() {
    openTab("fantasy");
});
document.getElementById("creative").addEventListener("click", function() {
    openTab("creative");
});
document.getElementById("simple").addEventListener("click", function() {
    openTab("simple");
});
document.getElementById("documentary").addEventListener("click", function() {
    openTab("documentary");
});
document.getElementById("other").addEventListener("click", function() {
    openTab("other");
});

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("grid");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("active");
    for (i = 0; i < y.length; i++) {
        y[i].style.borderBottom = "hidden";
    }
    document.getElementById("grid-"+tabName).style.display = "";
    document.getElementById(tabName).style.borderBottom = "1px solid black"
}