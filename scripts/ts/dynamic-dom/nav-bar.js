var selectedElement = null;
export function setupNavBar() {
    console.log("Set up navbar! " + selectedElement);
     
 // nav bar items with sub-menus are dropbtns
    var dropBtns = document.getElementsByClassName("dropbtn");
    
    for (let i = 0; i < dropBtns.length; i++) {
      dropBtns[i].onclick = function() { setSelected(this) };
    }
    // nav bar items without sub-menus are just a hrefs
    var navbar = document.getElementsByClassName("navbar")[0];
    navbar.childNodes.forEach(function(item) {
   if (item.tagName == "A") {
       console.log("found a navbar link");
       item.onclick = function() { setSelected(this) };
   }
})
 
    // because the page reloads when a menu item is selected we store
    // the selected one and then add/remove the "selected" class
    // based on the recorded value
    showSelectedNavbarItem();
}
    
    export function setSelected(element) {
    console.log("toggle " + element.id);
    
    selectedElement = element;
    console.log("selected Element is " + element.id);
    }
    
    export function showSelectedNavbarItem() {
    var dropBtns = document.getElementsByClassName("dropbtn");
    console.log("Setting selection for " + selectedElement);
    // get all the dropbtns, set up the appropriate selections
    for (let i = 0; i < dropBtns.length; i++) {
    
      // if this is the selected item
      if ( (selectedElement != null) &&  (dropBtns[i].id == selectedElement.id) ) {
         // element.classList.add("my-class");
          // dropBtns[i].classList.add(", selected");
          dropBtns[i].className = "dropbtn, selected";
      } else {
          dropBtns[i].className = "dropbtn";
      }
    }
    }