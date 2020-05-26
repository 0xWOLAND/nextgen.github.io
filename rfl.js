var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';

document.getElementById("bhargav_text").addEventListener("wheel", fadeInLeft);

function fadeInLeft() {
    document.getElementById("bhargav_text_container").style = "left:0px; opacity: 1;";
}
$(window).scroll(function() {
    var height = $(window).scrollTop();

    if (height > document.getElementById('bhargav_text_container').clientHeight + 30) {
        console.log("Not visible");
        // do something
    }
    console.log(height);
});