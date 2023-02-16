import $ from "jquery";

export function showInfoTeddy() {
    $('#teddy').on('click', function () {
        console.log("TEDDY");
        $("#teddy_bears").toggleClass("active");
        $("#arrowTeddy").toggleClass("upArrow");
    })

    $('#cubs').on('click', function(){
        $("#bear_cubs").toggleClass("active");
        $("#arrowCubs").toggleClass("upArrow");
    })

    $('#big').on('click', function(){
        $("#big_bears").toggleClass("active");
        $("#arrowBig").toggleClass("upArrow");
    })

    $('#panda').on('click', function(){
        $("#panda_bear").toggleClass("active");
        $("#arrowPanda").toggleClass("upArrow");
    })

    $('#sun').on('click', function(){
        $("#sun_bear").toggleClass("active");
        $("#arrowSun").toggleClass("upArrow");
    })

    $('#tracks').on('click', function(){
        $("#bear_tracks").toggleClass("active");
        $("#arrowTracks").toggleClass("upArrow");
    })

}