export function setUpSticky(){
    //execute the function when the user scrolls
    window.onscroll = function() {myFunction()};

    //get our header
    var header = document.getElementById("main-menu-container");
   
    //get the offset position of the navbar
    var sticky = header!.offsetTop;

    //add the sticky class to the header when scroll position reached. Remove sticky when you leave
    function myFunction(){
        if(window.pageYOffset > sticky){
          header!.classList.add("sticky");
        } else{
            header!.classList.remove("sticky");
        }
    }
}