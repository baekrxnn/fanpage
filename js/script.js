// JavaScript File
/*global $*/

var songlist= [
    "https://www.youtube.com/embed/leu-cTvMWTA",
    "https://www.youtube.com/embed/sGRv8ZBLuW0",
    "https://www.youtube.com/embed/IdssuxDdqKk",
    "https://www.youtube.com/embed/tbe3pe2BtwA",
    "https://www.youtube.com/embed/KSH-FVVtTf0",
    "https://www.youtube.com/embed/73QzQYN8FtE",
    "https://www.youtube.com/embed/RuqaVryDRd0",
    "https://www.youtube.com/embed/yWfsla_Uh80",
    "https://www.youtube.com/embed/I3dezFzsNss",
    "https://www.youtube.com/embed/bsY-uOfvMDI",
    
    ];

console.log(songlist.length);

function play() {
    for(var i=0; i<songlist.length; i++){
        $("iframe").attr("src",songlist[0]);
    }
}
    
play();

$("button").click(function() {
    var store= songlist.shift();
    $("iframe").attr("src",store);
    play();
})